import EnjoyConvenience from "@/components/Index/EnjoyConvenience";
import FAQs from "@/components/Index/FAQs";

const Layout = ({ children }: {children: React.ReactNode}): JSX.Element => {
    return (
        <main className="bg-[#e1f3ff]">
            {children}

            <EnjoyConvenience />
            <FAQs />
        </main>
    );
};

export default Layout;
