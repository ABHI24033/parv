import { LoginForm } from "@/components/login-form";
import { RegisterForm } from '@/components/auth/register-form';

export default function LoginPage() {

    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="relative hidden bg-muted lg:block">
                <img
                    src="/auth/login.jpeg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    {/* <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex w-28 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <img
              src="/logo/logo.jpg"
              alt="Logo"
              className="h-16"
              />
            </div>
          </a> */}
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        <RegisterForm />
                    </div>
                </div>
            </div>

        </div>
    )
}