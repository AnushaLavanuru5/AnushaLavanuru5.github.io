import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs.tsx";
import { useEffect, useState } from "react";

const TabsButtons = (props:any) => {
    const [activeTab, setActiveTab] = useState("about");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const tab = params.get("tab");
        if (tab) {
            setActiveTab(tab);
        }
    }, []);

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
            <TabsList className={"bg-white dark:bg-n700  w-full px-2 py-8 rounded-xl"}>
                <TabsTrigger className={"w-full py-4 rounded-lg data-[state=active]:text-white dark:data-[state=active]:text-primary-dark data-[state=active]:bg-primary-dark dark:data-[state=active]:bg-dark-theme"} value="about">About</TabsTrigger>
                <TabsTrigger className={"w-full py-4 rounded-lg data-[state=active]:text-white dark:data-[state=active]:text-primary-dark data-[state=active]:bg-primary-dark dark:data-[state=active]:bg-dark-theme"} value="workxp">Work Experience</TabsTrigger>
                <TabsTrigger className={"w-full py-4 rounded-lg data-[state=active]:text-white dark:data-[state=active]:text-primary-dark data-[state=active]:bg-primary-dark dark:data-[state=active]:bg-dark-theme"} value="projects">Projects</TabsTrigger>
                {/* <TabsTrigger className={"w-full py-4 rounded-lg dark:data-[state=active]:text-primary-dark data-[state=active]:bg-light-theme dark:data-[state=active]:bg-dark-theme"} value="projects">Projects</TabsTrigger> */}
            </TabsList>
            <TabsContent value="about">
                {props.about}
            </TabsContent>
            <TabsContent value="projects">
                {props.projects}
            </TabsContent>
            <TabsContent value="workxp">
                {props.workxp}
            </TabsContent>
        </Tabs>
    );
};

export default TabsButtons;