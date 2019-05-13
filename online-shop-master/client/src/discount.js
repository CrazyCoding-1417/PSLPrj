const convertedVapidKey = urlBase64ToUint8Array(process.env.REACT_APP_PUBLIC_VAPID_KEY)

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4)
  // eslint-disable-next-line
  const base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/")

  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

function sendDiscount(discount) {
  return fetch(`${process.env.REACT_APP_API_URL}/notifications/discount`, {
    method: 'POST',
    body: JSON.stringify(discount),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function discount() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(function(advertisment) {
        if (!advertisment.pushManager) {
          console.log('Push manager unavailable.')
          return
        }

        advertisment.pushManager.getSubscription()
          .then(function(existDiscount) {
            if (existDiscount === null) {
              console.log('No discount detected, make a request.')
              advertisment.pushManager.subscribe({
                applicationServerKey: convertedVapidKey,
                userVisibleOnly: true,
              }).then(function(newDiscount) {
                console.log('New discount added.')
                sendDiscount(newDiscount)
              }).catch(function(e) {
                if (Notification.permission !== 'granted') {
                  console.log('Permission was not granted.')
                } else {
                  console.error('An error ocurred during the discount process.', e)
                }
              })
            } else {
              console.log('Existed discount detected.')
              sendDiscount(existDiscount)
            }
        })
    })
      .catch(function(e) {
        console.error('An error ocurred during Service Worker registration.', e)
      })
  }
}
