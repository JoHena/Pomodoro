import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { LoginForm } from "./LoginForm";

export function LoginButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">Login</Button>
			</DialogTrigger>

			<DialogContent className="px-10 text-black sm:max-w-[425px]">
				<div className="flex flex-col items-center gap-5">
					<DialogHeader>
						<DialogTitle>Login</DialogTitle>
					</DialogHeader>

					<LoginForm />

					<hr className="w-full border border-PomoInActive" />

					<div className="flex w-full gap-5">
						<Button
							className="w-1/2 rounded-lg bg-white p-4 shadow-md transition-all duration-100 hover:border-2 hover:border-PomoInActive hover:bg-white"
							type="button"
						>
							<FaGithub size={22} className="fill-black" />
						</Button>

						<Button
							className="w-1/2 rounded-lg bg-white p-4 shadow-md transition-all duration-100 hover:border-2 hover:border-PomoInActive hover:bg-white"
							type="button"
						>
							<FcGoogle size={"22"} />
						</Button>
					</div>
				</div>
				<p className="text-center text-sm">Don't have an account?</p>
			</DialogContent>
		</Dialog>
	);
}
