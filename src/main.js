(()=>{
    const n = document.querySelector(".js-menu-container")
      , e = document.querySelector(".js-open-menu")
      , t = document.querySelector(".js-close-menu")
      , i = ()=>{
        const o = e.getAttribute("aria-expanded") === "true" || !1;
        e.setAttribute("aria-expanded", !o),
        n.classList.toggle("is-open");
        const r = o ? "enableBodyScroll" : "disableBodyScroll";
    }
    ;
    e.addEventListener("click", i),
    t.addEventListener("click", i),
    window.matchMedia("(min-width: 768px)").addEventListener("change", o=>{
        o.matches && (n.classList.remove("is-open"),
        e.setAttribute("aria-expanded", !1))
    }
    )
}
)();