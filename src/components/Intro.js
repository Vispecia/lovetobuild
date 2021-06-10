import React from "react";
import "../css/intro.css";

function Intro() {
  return (
    <section
      data-scroll-section
      id="introduction"
      style={{ backgroundColor: "red" }}
    >
      <div className="intro__text">
        <div data-scroll data-scroll-speed="1">
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacinia eros in nulla dapibus laoreet. Donec eu sodales neque.
            Aenean elementum urna et nisi euismod euismod. Maecenas justo dolor,
            sodales vitae laoreet at, iaculis eget dui. Phasellus mattis
            eleifend tristique. Nunc at tincidunt elit. Vestibulum id odio
            semper, sagittis nunc at, rhoncus lorem. Duis lacinia aliquet est in
            ornare. Nullam blandit mi a est facilisis, ac pharetra urna
            ullamcorper. Nunc tempus interdum nisl laoreet porta. Pellentesque
            quis sem ac est fermentum lobortis sit amet eu urna. Suspendisse
            molestie libero vestibulum nibh ullamcorper ornare. Cras molestie
            dolor in sapien imperdiet, vitae venenatis dolor dignissim. Etiam
            nunc urna, tempor faucibus nunc et, aliquet lacinia metus. Nunc non
            neque tortor. Donec tempor, risus non egestas rutrum, enim ex
            gravida felis, quis finibus nunc nisl pharetra ante. Ut eu turpis
            urna. Aenean imperdiet mauris a massa fringilla bibendum. Mauris
            felis velit, hendrerit non erat ut, dapibus luctus ex. Nulla
            faucibus odio sit amet ex egestas, nec ultrices lectus varius.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
