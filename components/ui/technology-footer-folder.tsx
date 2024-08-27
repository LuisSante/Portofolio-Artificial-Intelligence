import { cn } from "@/lib/utils";
// import { Montserrat } from "next/font/google";
import { Caveat } from "next/font/google";
// import { Rajdhani } from "next/font/google";

interface TechnologyFooterFolderProps {
    tech?: string;
}

const typeFont = Caveat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const TechnologyFooterFolder = ({
    tech
}: TechnologyFooterFolderProps) => {
    return (
        <div className={cn(
            'text-md'
            , typeFont.className)}>
            {tech}
        </div>
    )
}

