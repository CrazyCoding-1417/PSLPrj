self.addEventListener('push', event => {
  const data = event.data.json()
    self.registration.showNotification(data.title, {
      body: data.body,
      image: "https://lda.lowes.com/is/image/Lowes/PromoTeam_Promo_DP18-108791_01_HERO_1_Appliance?scl=1&201904301022",
    })
})


// self.addEventListener('push', event => {
//   const data = event.data.json()
//   console.log('New notification', data)
//   const options = {
//     body: data.body,
//     icon: "http://image.ibb.co/frYOFd/tmlogo.png",
//   }
//   event.waitUntil(
//     self.registration.showNotification(data.title, options)
//   );
// })
