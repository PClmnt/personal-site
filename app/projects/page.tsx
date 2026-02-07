import { GithubIcon } from "../_components/icons";

export default function Projects() {
    return (
        <div>
            <h1 className="text-lg font-semibold text-zinc-50">Litmus</h1>
            <p className="text-xs text-zinc-300">Recently with some ongoing projects at work, as well as some other personal projects, I needed an easy way to compare LLMs, nothing too fancy, just their
                text outputs along with multi modality (images). I also love using Opencode in my AI development workflow, which uses OpenTUI under the hood. So, I pulled in
                OpenTUI and started building with it, <span className="inline-flex flex-row items-center gap-2"> the result is here:
                    <a
                        className="underline decoration-slate-500 underline-offset-4 hover:text-white transition-colors"
                        href="https://github.com/PClmnt/litmus">
                        <GithubIcon height={22} width={22} />
                    </a>
                </span>
            </p>
        </div >
    )
}