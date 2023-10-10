import * as DialogPrimitive from '@radix-ui/react-dialog'

export default function Dialog({ children }: { children: React.ReactNode }) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger className="group md:hidden">{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 top-[90px] grid place-items-center">
          <DialogPrimitive.Content className="h-screen w-full bg-light-cream data-[state=open]:animate-content-show">
            <nav className="mt-10">
              <ul className="flex flex-col items-center gap-8">
                <li>
                  <a href="/" className="heading-4">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="heading-4">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/subscribe" className="heading-4">
                    Create Your Plan
                  </a>
                </li>
              </ul>
            </nav>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
