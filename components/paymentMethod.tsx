import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Input } from '@nextui-org/input';
import { Select, SelectItem } from '@nextui-org/select';
// import { RadioGroup, Radio } from '@nextui-org/radio';
// import { Apple, PayPal } from './icons';

export default function PaymentMethod() {
  return (
    <Card>
      <CardHeader>
        <p className="mb-4 text-[16px]">新しい支払い方法をアカウントに追加してください。</p>
      </CardHeader>
      <CardBody className="grid gap-6">
        {/* <div>
          <RadioGroup defaultValue="card" orientation="horizontal">
            <Radio
              value="card"
              size="md"
              description={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              }
            >
              Card
            </Radio>
            <Radio
              value="paypal"
              size="md"
              description={<PayPal />}
            >
              Paypal
            </Radio>
            <Radio
              value="apple"
              size="md"
              description={<Apple />}
            >
              Apple
            </Radio>
          </RadioGroup>
        </div> */}

        <div className="grid gap-2">
          <label htmlFor="name">名前</label>
          <Input id="name" placeholder="First Last" className="w-full" />
        </div>

        <div className="grid gap-2">
          <label htmlFor="city">都市</label>
          <Input id="city" placeholder="" className="w-full" />
        </div>

        <div className="grid gap-2">
          <label htmlFor="number">カード番号</label>
          <Input id="number" placeholder="" className="w-full" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-2">
            <label htmlFor="month">有効期限</label>
            <Select id="month" placeholder="Month" className="w-full">
              <SelectItem key="1" value="1">
                January
              </SelectItem>
              <SelectItem key="2" value="2">
                February
              </SelectItem>
              <SelectItem key="3" value="3">
                March
              </SelectItem>
              <SelectItem key="4" value="4">
                April
              </SelectItem>
              <SelectItem key="5" value="5">
                May
              </SelectItem>
              <SelectItem key="6" value="6">
                June
              </SelectItem>
              <SelectItem key="7" value="7">
                July
              </SelectItem>
              <SelectItem key="8" value="8">
                August
              </SelectItem>
              <SelectItem key="9" value="9">
                September
              </SelectItem>
              <SelectItem key="10" value="10">
                October
              </SelectItem>
              <SelectItem key="11" value="11">
                November
              </SelectItem>
              <SelectItem key="12" value="12">
                December
              </SelectItem>
            </Select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="year">Year</label>
            <Select id="year" placeholder="Year" className="w-full">
              {Array.from({ length: 10 }, (_, i) => (
                <SelectItem key={i} value={`${new Date().getFullYear() + i}`}>
                  {new Date().getFullYear() + i}
                </SelectItem>
              ))}
            </Select>
          </div>

          <div className="grid gap-2">
            <label htmlFor="cvc">CVC</label>
            <Input id="cvc" placeholder="CVC" className="w-full" />
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  );
}
