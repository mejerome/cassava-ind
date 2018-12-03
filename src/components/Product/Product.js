import React from "react";
import "./Product.css";
import "tachyons";
import items from "./items.jpeg";
import plates from "./plates.jpeg";

const Product = () => {
  return (
    <div>
      <div className="tc">
        <h5 className="f3 ">Characteristics of our Products</h5>
      </div>
      <div class="cf">
        <div class="fl w-25 w-20-ns tc">
          <article class="br2 hover-bg-light-green ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <img src={items} class="db w-100 br2 br--top" alt="" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv0 card-title">Natural Raw Products</h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                The products are made of native cassava starch, edible oil, wood
                fibre and other renewable natural resource which are naturally
                abundant materials.
              </p>
            </div>
          </article>
        </div>
        <div class="fl w-25 w-20-ns tc">
          {" "}
          <article class="hover-bg-light-green br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <img src={plates} class="db w-100 br2 br--top" alt="" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv0 card-title">
                    Biodegradable End Products
                  </h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                The end Products are bio-based polymers that are fully
                biodegradable in nature without causing harm to the environment.
              </p>
            </div>
          </article>
        </div>
        <div class="fl w-25 w-20-ns tc">
          {" "}
          <article class="hover-bg-light-green br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <img src={items} class="db w-100 br2 br--top" alt="" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv0 card-title">
                    Contains no Polyolefin
                  </h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                Products contains no Polyolefin plastics which are not
                recyclable and leach toxins in food and is an environmental
                problem throughout its lifecycle.
              </p>
            </div>
          </article>
        </div>
        <div class="fl w-25 w-20-ns tc">
          {" "}
          <article class="hover-bg-light-green br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
            <img src={items} class="db w-100 br2 br--top" alt="" />
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv0 card-title">
                    Safe for Animal Consumption
                  </h1>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                They are harmless when consumed by Animals and cause no harm to
                living beings and their environment.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Product;
