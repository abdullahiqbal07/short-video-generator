import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { solidColor, gradientColor } from "@/app/_data/BackGroundColor";
export const BackgroundColorList = ({ defaultValue, handleInputChange }) => {
  return (
    <div>
      <Tabs defaultValue="solid" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="solid">Solid</TabsTrigger>
          <TabsTrigger value="gradient">Gradient</TabsTrigger>
        </TabsList>
        <TabsContent value="solid">
          <ScrollArea className="h-[300px] w-full max-w-md rounded-md border p-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 cursor-pointer">
              {solidColor.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center rounded-lg p-3 text-white text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
                  style={{
                    background: value.hex,
                  }}
                  onClick={() => handleInputChange(value.hex)}
                >
                  {value.name}
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="gradient">
          <ScrollArea className="h-[300px] w-full max-w-md rounded-md border p-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 cursor-pointer">
              {gradientColor.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center rounded-lg p-3 text-white text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
                  style={{
                    background: value.hex,
                  }}
                  onClick={() => handleInputChange(value.hex)}
                >
                  {value.name}
                </div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};
