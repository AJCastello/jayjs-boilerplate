import { Section } from "@jay-js/ui"
import "./Global.style.css"

const root = document.querySelector<HTMLDivElement>("#app")!

const bodyContent = Section({
  variant: "main",
  className: "text-xl text-center h-screen flex flex-col justify-center items-center",
  content: "Hello World"
})

root.appendChild(bodyContent)