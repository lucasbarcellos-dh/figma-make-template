import { Info, TrendingUp } from "lucide-react";

  interface MetricCardProps {
    title?: string;
    value?: string;
    unit?: string;
    variation?: string;
    subtitle?: string;
    footer?: string;
    isPositive?: boolean;
    showProgress?: boolean;
    progressValue?: number;
    progressColor?: string;
  }
  
  export default function MetricCard({
    title = "Metric title",
    value = "48",
    unit = "sales",
    variation = "1.24%",
    subtitle = "Optional subtitle",
    footer = "Footer caption",
    isPositive = true,
    showProgress = false,
    progressValue = 40,
    progressColor = "#4629ff"
  }: MetricCardProps) {
    const variationColor = isPositive ? "#048a42" : "#dc2626";
  
    return (
      <div
        className="relative rounded-xl size-full"
        data-name="Metric card/Standard"
      >
        <div className="relative size-full">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start px-5 py-4 relative size-full">
            {/* Card Background */}
            <div className="absolute bg-[#ffffff] inset-0 rounded-xl" data-name="Card">
              <div className="absolute border border-[#e9eaec] border-solid inset-0 pointer-events-none rounded-xl" />
            </div>
            
            {/* Header */}
            <div
              className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-0 relative shrink-0 w-full"
              data-name="Header"
            >
              <div className="basis-0 flex flex-col font-semibold grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#141415] text-[16px] text-left">
                <p className="block leading-[1.5]">{title}</p>
              </div>
              <div className="relative shrink-0 size-4" data-name="info-circle">
                <Info className="size-4 text-[#141415]" />
              </div>
            </div>
            
            {/* Body */}
            <div
              className={`box-border content-stretch flex flex-col ${showProgress ? 'gap-2' : 'gap-0.5'} items-start justify-center pb-1 pt-0 px-0 relative shrink-0 w-full`}
              data-name="Body"
            >
              {/* Main */}
              <div
                className="[flex-flow:wrap] box-border content-baseline flex gap-0 items-baseline justify-start p-0 relative shrink-0 w-full"
                data-name="Main"
              >
                {/* Value */}
                <div
                  className="box-border content-stretch flex flex-row font-bold gap-1.5 items-baseline justify-start leading-[0] not-italic pl-0 pr-2 py-0 relative shrink-0 text-[#141415] text-left text-nowrap"
                  data-name="Value"
                >
                  <div className="flex flex-col justify-center relative shrink-0 text-[24px]">
                    <p className="block leading-[1.34] text-nowrap whitespace-pre">{value}</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0 text-[20px]">
                    <p className="block leading-[1.5] text-nowrap whitespace-pre">{unit}</p>
                  </div>
                </div>
                
                {/* Variation */}
                <div
                  className="box-border content-stretch flex flex-row gap-0.5 items-center justify-start p-0 relative shrink-0"
                  data-name="Variation"
                >
                  <div 
                    className="font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-left text-nowrap"
                    style={{ color: variationColor }}
                  >
                    <p className="block leading-[1.5] whitespace-pre">{variation}</p>
                  </div>
                  <div className="relative shrink-0 size-4" data-name="arrow-upward">
                    <TrendingUp 
                      className="size-4"
                      style={{ 
                        color: variationColor,
                        transform: isPositive ? 'none' : 'rotate(180deg)' 
                      }} 
                    />
                  </div>
                </div>
              </div>
  
              {/* Progress Bar */}
              {showProgress && (
                <div
                  className="box-border content-stretch flex flex-col gap-2 items-start justify-center pb-1 pt-0 px-0 relative shrink-0 w-full"
                  data-name="Progress bar"
                >
                  <div
                    className="bg-[#e9eaec] h-1 overflow-clip relative rounded shrink-0 w-full"
                    data-name="🌮 Progress (bar)"
                  >
                    <div
                      className="absolute bottom-0 left-0 top-0"
                      style={{ 
                        backgroundColor: progressColor,
                        right: `${100 - Math.min(Math.max(progressValue, 0), 100)}%`
                      }}
                      data-name="Bar"
                    />
                  </div>
                </div>
              )}
              
              {/* Subtitle */}
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#343437] text-[14px] text-left w-full">
                <p className="block leading-[1.45]">{subtitle}</p>
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(20,20,21,0.32)] text-left text-nowrap">
              <p className="block leading-[1.34] whitespace-pre">{footer}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }