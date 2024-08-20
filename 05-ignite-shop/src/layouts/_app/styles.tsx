type Props = {
  children: React.ReactNode
}

export function Container({ children }: Props) {
  return (
    <div className="flex flex-col items-start min-h-[98vh] justify-center">
      {children}
    </div>
  )
}

export function Header({ children }: Props) {
  return (
    <header className="ml-auto mr-auto pt-8 pb-8 w-full max-w-[1180px] mt-0">
      {children}
    </header>
  )
}
