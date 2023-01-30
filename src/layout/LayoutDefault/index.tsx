import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutDefaultContainer } from "./styles";

export function LayoutDefault() {
  return (
    <LayoutDefaultContainer>
      <Header />
      <Outlet />
    </LayoutDefaultContainer>
  )
}