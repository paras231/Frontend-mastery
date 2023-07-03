import { MouseEventHandler } from "react";

export type HeaderProps = {
  selectedItem: number;
  handleSelect: Function;
};

export type tabProps = {
  selectedItem: number;
  handleSelect: Function;
};

export type projectModalProps = {
  open: boolean;
  handleOpen: MouseEventHandler;
  handleClose: MouseEventHandler;
};

export type projectFormProps = {
  handleClose: Function;
};

export type projectDetailModalProps = {
  open: boolean;
  handleOpen: MouseEventHandler;
  handleClose: MouseEventHandler;
};

export type teamModalProps = {
  open: boolean;
  handleOpen: MouseEventHandler;
  handleClose: MouseEventHandler;
};

export type teamFormProps = {
  handleClose: Function;
}