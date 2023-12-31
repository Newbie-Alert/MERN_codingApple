import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import axios from "axios";

function Cart() {
  let [item, setItem] = useState(null);
  let sum = 0;

  useEffect(() => {
    axios
      .get("https://imitation-project.du.r.appspot.com/length/cart")
      .then((result) => {
        setItem(result.data);
      });
  }, []);
  if (item !== null) {
    item.map((el) => (sum += el.price * el.quantity));
  }

  return (
    <>
      {item !== null ? (
        <div className={styles.cart_container}>
          <section className={styles.cart_top}>
            <h2>신청하기</h2>
          </section>
          <section className={styles.cart_table}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Class</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody className={styles.cart_body}>
                {item !== null ? <CARTITEM item={item} /> : null}
              </tbody>
            </table>
            <div className={styles.bill}>
              <div className={styles.bill_title}>
                <h3>신청 강좌 합계</h3>
              </div>
              <div className={styles.bill_total}>
                <h3>총계</h3>

                <h4>{sum}￦</h4>
              </div>
              <button>결제하기</button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

function CARTITEM({ item, total }) {
  return (
    <>
      {item !== null
        ? item.map((el, i) => {
            return (
              <tr key={i}>
                <td className={styles.cart_button}>
                  <button
                    data-id={i}
                    onClick={(e) => {
                      axios
                        .post(
                          "https://imitation-project.du.r.appspot.com/delete",
                          {
                            id: parseInt(e.target.dataset.id),
                          }
                        )
                        .then((result) => {
                          if (result.data.quantity < 1) {
                            e.target.parentNode.parentNode.classList.add(
                              styles.fade
                            );
                          }
                        });
                    }}
                  >
                    X
                  </button>
                </td>
                <td>{el.lesson}</td>
                <td>{el.price}￦</td>
                <td>{el.quantity}</td>
              </tr>
            );
          })
        : null}
    </>
  );
}

export default Cart;
