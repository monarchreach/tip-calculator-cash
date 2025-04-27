"use client"

import * as React from "react"
import { Check, ChevronsUpDown, MapPin } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Badge } from "@/components/atoms/badge"

interface Location {
  value: string
  label: string
  country: string
}

interface LocationSelectorProps {
  value: string
  onChange: (value: string) => void
  locations: Location[]
  className?: string
}

export function LocationSelector({ value, onChange, locations, className }: LocationSelectorProps) {
  const [open, setOpen] = React.useState(false)
  const selectedLocation = locations.find((location) => location.value === value)

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
            {selectedLocation ? (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{selectedLocation.label}</span>
                <Badge variant="location" className="ml-2">
                  {selectedLocation.country}
                </Badge>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Select location</span>
              </div>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search location..." />
            <CommandList>
              <CommandEmpty>No location found.</CommandEmpty>
              <CommandGroup className="max-h-[300px] overflow-auto">
                {locations.map((location) => (
                  <CommandItem
                    key={location.value}
                    value={location.value}
                    onSelect={(currentValue) => {
                      onChange(currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === location.value ? "opacity-100" : "opacity-0")} />
                    <div className="flex flex-1 items-center justify-between">
                      <span>{location.label}</span>
                      <Badge variant="outline" className="ml-2">
                        {location.country}
                      </Badge>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
