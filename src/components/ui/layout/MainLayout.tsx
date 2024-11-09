import { PropsWithChildren } from "react";
import "./MainLayout.scss";

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="container">
      <h1 className="header">Дневник наблюдения за погодой</h1>
      <main className="mainLayout">{children}</main>
    </div>
  );
};
