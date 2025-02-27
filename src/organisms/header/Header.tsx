import React from "react";
import s from './style.module.scss'

interface HeaderProps {
  title: React.ReactNode;
}

export const Header = ({ title }: HeaderProps) => {
  return <header className={s.header}>{title}</header>;
};
