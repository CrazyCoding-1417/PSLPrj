import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import { showCartDlg, setCheckedOutItems } from "../../Redux/Actions";
import { withRouter } from "react-router-dom";
import CartRow from "./CartRow";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const mapStateToProps = state => {
  return { open: state.showCartDialog, items: state.cartItems };
};

const ConnectedCartDialog = props => {
    let totalPrice = props.items.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div>
        <Dialog
          open={props.open}
          onClose={() => {
            this.props.dispatch(showCartDlg(false));
          }}
        >
          <AppBar position="static" style={{ backgroundColor: "#3863aa" }}>
            <Toolbar>
              <ShoppingCartIcon
                fontSize="large"
                style={{ color: "white", marginRight: 10 }}
              />
              Shopping Cart
            </Toolbar>
          </AppBar>

          <div
            style={{
              minWidth: 300,
              maxHeight: 400,
              padding: 10,
              overflow: "auto"
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Item name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.items.map((item, index) => {
                  return <CartRow item={item} key={item.id} {...props} />;
                })}
              </TableBody>
            </Table>
          </div>

          <div style={{ marginTop: 20 }}>
            <div
              style={{
                color: "#504F5A",
                float: "left",
                margin: 10,
                marginTop: 20,
                fontSize: 20
              }}
            >
              {" "}
              Total Price: $ {totalPrice}
            </div>
            <Button
              style={{ float: "right", margin: 20 }}
              variant="outlined"
              color="primary"
              disabled={totalPrice === 0}
              onClick={() => {
                props.dispatch(showCartDlg(false));
                props.dispatch(setCheckedOutItems(props.items));
                props.history.push("/order");
              }}
            >
              Checkout
            </Button>
          </div>
        </Dialog>
      </div>
    );
}
const CartDialog = withRouter(connect(mapStateToProps)(ConnectedCartDialog));
export default CartDialog;
