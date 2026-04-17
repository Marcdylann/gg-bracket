import { Toaster as ChakraToaster, createToaster } from "@chakra-ui/react";

export const toaster = createToaster({
  placement: "top-end",
});

export function Toaster() {
  return (
    <ChakraToaster toaster={toaster}>
      {(toast) => (
        <div>
          <p>{toast.title}</p>
        </div>
      )}
    </ChakraToaster>
  );
}