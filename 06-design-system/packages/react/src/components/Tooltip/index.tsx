import { ComponentProps } from 'react'
import { Plus } from 'phosphor-react'
import {
  TooltipArrow,
  TooltipButton,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {}

export function Tooltip(props: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>
          <TooltipButton>
            <Plus />
          </TooltipButton>
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            Add to library
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}
