import { useState } from "react";

export const state = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useState<string>('');
};