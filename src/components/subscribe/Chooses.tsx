import * as Accordion from '@radix-ui/react-accordion'
import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { useState } from 'react'

const drinkOptions = [
  {
    title: 'Capsule',
    description: 'Compatible with Nespresso systems and similar brewers',
  },
  {
    title: 'Filter',
    description: 'For pour over or drip methods like Aeropress, Chemex, and V60',
  },
  {
    title: 'Espresso',
    description: 'Dense and finely ground beans for an intense, flavorful experience',
  },
]

const coffeeTypeOptions = [
  {
    title: 'Single Origin',
    description: 'Distinct, high quality coffee from a specific family-owned farm',
  },
  {
    title: 'Decaf',
    description: 'Just like regular coffee, except the caffeine has been removed',
  },
  {
    title: 'Blended',
    description: 'Combination of two or three dark roasted beans of organic coffees',
  },
]

const quantityOptions = [
  {
    title: '250g',
    description: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
  },
  {
    title: '500g',
    description: 'Perfect option for a couple. Yields about 40 delectable cups.',
  },
  {
    title: '1000g',
    description: 'Perfect for offices and events. Yields about 90 delightful cups.',
  },
]

const grindOptions = [
  {
    title: 'Wholebean',
    description: 'Best choice if you cherish the full sensory experience',
  },
  {
    title: 'Filter',
    description: 'For drip or pour-over coffee methods such as V60 or Aeropress',
  },
  {
    title: 'Cafetiére',
    description: 'Course ground beans specially suited for french press coffee',
  },
]

const deliveryOptions = [
  {
    title: 'Every week',
    description: '$7.20 per shipment. Includes free first-class shipping.',
  },
  {
    title: 'Every 2 weeks',
    description: '$9.60 per shipment. Includes free priority shipping.',
  },
  {
    title: 'Every month',
    description: '$12.00 per shipment. Includes free priority shipping.',
  },
]

const planOptions = {
  drink: { title: 'How do you drink your coffee?', options: drinkOptions },
  'coffee-type': { title: 'What type of coffee?', options: coffeeTypeOptions },
  quantity: { title: 'How much would you like?', options: quantityOptions },
  grind: { title: 'Want us to grind them?', options: grindOptions },
  delivery: { title: 'How often should we deliver?', options: deliveryOptions },
} as const

const options = [
  {
    label: 'Preferences',
    value: 'drink',
  },
  {
    label: 'Bean Type',
    value: 'coffee-type',
  },
  {
    label: 'Quantity',
    value: 'quantity',
  },
  {
    label: 'Grind Option',
    value: 'grind',
  },
  {
    label: 'Deliveries',
    value: 'delivery',
  },
]

export default function Chooses() {
  const [selectedPlanOptions, setSelectedPlanOptions] = useState({
    drink: '',
    'coffee-type': '',
    quantity: '',
    grind: '',
    delivery: '',
  })

  const [values, setValues] = useState(['drink'])

  const isNonAllOptionsSelected = Object.values(selectedPlanOptions).some((option) => !option)

  const handlePlanOptionClick = (type: string, title: string) => {
    setSelectedPlanOptions((prevOptions) => ({ ...prevOptions, [type]: title }))
  }

  return (
    <section className="mt-[120px] flex justify-between md:mt-[144px] lg:mx-auto lg:mt-[168px] lg:max-w-[1110px]">
      <ol className="hidden divide-y lg:block">
        {options.map((option, index) => (
          <li key={index} className="flex gap-[25px] py-6 heading-4">
            <span
              className={clsx(
                selectedPlanOptions[option.value as keyof typeof selectedPlanOptions]
                  ? 'text-dark-cyan'
                  : 'text-grey',
                !values.includes(option.value) && 'text-opacity-40',
              )}
            >
              0{index + 1}
            </span>
            <span
              className={clsx(
                'text-dark-grey-blue',
                !values.includes(option.value) && 'text-opacity-40',
              )}
            >
              {option.label}
            </span>
          </li>
        ))}
      </ol>

      <div>
        <Accordion.Root
          type="multiple"
          value={values}
          onValueChange={setValues}
          className="flex flex-col gap-[96px] md:gap-[100px] lg:ml-auto lg:max-w-[730px] lg:gap-[88px]"
        >
          {Object.entries(planOptions).map(([key, { title, options }]) => (
            <Accordion.Item key={key} value={key}>
              <AccordionTrigger>{title}</AccordionTrigger>
              <AccordionContent>
                {options.map((option, index) => (
                  <Card
                    key={index}
                    title={option.title}
                    description={option.description}
                    isSelected={
                      selectedPlanOptions[key as keyof typeof selectedPlanOptions] === option.title
                    }
                    onClick={() => handlePlanOptionClick(key, option.title)}
                  />
                ))}
              </AccordionContent>
            </Accordion.Item>
          ))}
        </Accordion.Root>
        <div className="mt-[120px] flex flex-col gap-2 rounded-[10px] bg-[#2C343E] px-6 py-8 md:mt-[144px] md:px-11 md:py-[27px] lg:ml-auto lg:max-w-[730px] lg:px-16">
          <span className="uppercase text-white/50">Order summary</span>
          <p className="!leading-[40px] text-white heading-4">
            “I drink my coffee as{' '}
            <span className="text-dark-cyan">{selectedPlanOptions.drink || '_____'}</span>, with a{' '}
            <span className="text-dark-cyan">{selectedPlanOptions['coffee-type'] || '_____'}</span>{' '}
            type of bean.{' '}
            <span className="text-dark-cyan">{selectedPlanOptions.quantity || '_____'}</span> ground
            ala <span className="text-dark-cyan">{selectedPlanOptions.grind || '_____'}</span>, sent
            to me <span className="text-dark-cyan">{selectedPlanOptions.delivery || '_____'}</span>
            .”
          </p>
        </div>
        <div className="text-center lg:text-right">
          <Dialog.Root>
            <Dialog.Trigger disabled={isNonAllOptionsSelected} className="mt-14 btn lg:mt-10">
              Create my plan
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 grid place-items-center bg-black/40 px-6 py-[35px]">
                <Dialog.Content className="h-fit w-full overflow-hidden rounded-lg bg-light-cream data-[state=open]:animate-content-show md:h-auto md:w-[540px] lg:h-full">
                  <div className="flex h-[88px] items-center bg-[#333D4B] px-6 text-white heading-4 md:h-[136px] md:px-14 md:heading-2">
                    Order Summary
                  </div>
                  <div className="px-6 py-10 md:p-14">
                    <p className="!leading-[40px] text-[#83888F] heading-4">
                      “I drink my coffee as{' '}
                      <span className="text-dark-cyan">{selectedPlanOptions.drink || '_____'}</span>
                      , with a{' '}
                      <span className="text-dark-cyan">
                        {selectedPlanOptions['coffee-type'] || '_____'}
                      </span>{' '}
                      type of bean.{' '}
                      <span className="text-dark-cyan">
                        {selectedPlanOptions.quantity || '_____'}
                      </span>{' '}
                      ground ala{' '}
                      <span className="text-dark-cyan">{selectedPlanOptions.grind || '_____'}</span>
                      , sent to me{' '}
                      <span className="text-dark-cyan">
                        {selectedPlanOptions.delivery || '_____'}
                      </span>
                      .”
                    </p>
                    <p className="mt-2 text-[#333D4B]">
                      Is this correct? You can proceed to checkout or go back to plan selection if
                      something is off. Subscription discount codes can also be redeemed at the
                      checkout.
                    </p>
                    <div className="mt-12 hidden items-center gap-[19px] md:flex">
                      <p className="heading-3">$14.00/ mo</p>
                      <Dialog.Close className="btn">Checkout</Dialog.Close>
                    </div>
                    <Dialog.Close className="mt-6 !w-full btn md:hidden">
                      Checkout - $14.00 / mo
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Overlay>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </section>
  )
}

const AccordionTrigger = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion.Header className="bg-light-cream">
      <Accordion.Trigger className="group flex w-full items-center justify-between">
        <span className="max-w-[240px] text-left text-grey heading-4 md:max-w-fit md:heading-3 lg:heading-2">
          {children}
        </span>
        <div className="ease-[cubic-bezier(0.87, 0, 0.13, 1)] duration-[600ms] ease-in-out group-data-[state=open]:rotate-180">
          <svg width="19" height="13" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
              fill="#0E8784"
              fillRule="nonzero"
            />
          </svg>
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

const AccordionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
      <div className="flex flex-col gap-4 overflow-hidden pt-8 md:flex-row">{children}</div>
    </Accordion.Content>
  )
}

type CardProps = {
  title: string
  description: string
  isSelected?: boolean
  onClick?: () => void
}
const Card = ({ title, description, isSelected = false, onClick }: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'flex cursor-pointer flex-col gap-2 rounded-lg px-[25px] py-6 transition-colors md:gap-6 md:py-8 md:pb-[84px] lg:px-[28px]',
        isSelected
          ? 'bg-dark-cyan text-white hover:bg-dark-cyan/80'
          : 'bg-[#F4F1EB] text-[#333D4B] hover:bg-[#FDD6BA]',
      )}
    >
      <p className="heading-4">{title}</p>
      <p className="leading-[26px]">{description}</p>
    </div>
  )
}
