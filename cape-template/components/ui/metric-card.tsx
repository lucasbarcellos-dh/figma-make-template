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
    unit = "orders",
    variation = "1.24%",
    subtitle = "Optional subtitle",
    footer = "Footer caption",
    isPositive = true,
    showProgress = false,
    progressValue = 40,
    progressColor = "#4629ff"
  }: MetricCardProps) {
    const infoCirclePath = "M7.99902 1.49998C11.5879 1.50022 14.4971 4.4101 14.4971 7.999C14.4968 11.5878 11.5878 14.4968 7.99902 14.497C4.41011 14.497 1.50024 11.5879 1.5 7.999C1.5 4.40994 4.40996 1.49998 7.99902 1.49998ZM7.99902 2.49998C4.96224 2.49998 2.5 4.96223 2.5 7.999C2.50024 11.0356 4.96239 13.497 7.99902 13.497C11.0355 13.4968 13.4968 11.0355 13.4971 7.999C13.4971 4.96237 11.0356 2.50022 7.99902 2.49998ZM8.09961 7.04685C8.32736 7.09355 8.49902 7.29553 8.49902 7.53709V10.2676H9.38281C9.65895 10.2676 9.88281 10.4914 9.88281 10.7676C9.88259 11.0435 9.65882 11.2676 9.38281 11.2676H6.61426C6.33826 11.2675 6.11447 11.0435 6.11426 10.7676C6.11426 10.4914 6.33812 10.2676 6.61426 10.2676H7.49902V8.03709H7.07617C6.80003 8.03709 6.57617 7.81323 6.57617 7.53709C6.57617 7.26095 6.80003 7.03709 7.07617 7.03709H7.99902L8.09961 7.04685ZM7.99902 4.499C8.40221 4.49924 8.72923 4.82628 8.72949 5.22947C8.72949 5.63288 8.40238 5.96067 7.99902 5.96092H7.99804L7.98828 5.95896C7.95547 5.9583 7.92354 5.9559 7.89258 5.9492L7.85058 5.94529C7.51801 5.87685 7.26758 5.5823 7.26758 5.22947C7.26784 4.82631 7.59489 4.49929 7.99804 4.499H7.99902Z";
    const arrowUpwardPath = "M8.01457 2.50346C8.03654 2.50402 8.05824 2.50687 8.08 2.5103C8.09181 2.51222 8.10364 2.51343 8.11516 2.51616C8.1368 2.52118 8.15768 2.52873 8.17863 2.53667C8.18468 2.539 8.19126 2.53997 8.19719 2.54253C8.25422 2.56672 8.30781 2.60165 8.35441 2.64799L13.3564 7.6226L13.4208 7.70073C13.5494 7.89444 13.5287 8.15836 13.3583 8.32964C13.1878 8.50103 12.9239 8.52291 12.7294 8.39507L12.6513 8.33159L8.49894 4.20171V12.9976C8.49889 13.2737 8.27505 13.4976 7.99894 13.4976C7.72303 13.4974 7.499 13.2736 7.49894 12.9976V4.20757L3.35246 8.33159C3.15668 8.52619 2.84013 8.52532 2.64543 8.32964C2.45073 8.13387 2.45167 7.81734 2.64738 7.6226L7.63273 2.66362C7.70956 2.58053 7.81386 2.52435 7.93156 2.50835C7.94974 2.50577 7.96793 2.50404 7.98625 2.50346C7.99047 2.50335 7.99469 2.50249 7.99894 2.50249C8.00404 2.50249 8.00951 2.50331 8.01457 2.50346Z";
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
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 16 16"
                >
                  <g id="info-circle">
                    <path
                      d={infoCirclePath}
                      fill="var(--fill-0, #141415)"
                      id="icon"
                    />
                  </g>
                </svg>
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
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 16 16"
                      style={{ transform: isPositive ? 'none' : 'rotate(180deg)' }}
                    >
                      <g id="arrow-upward">
                        <path
                          d={arrowUpwardPath}
                          fill={variationColor}
                          id="icon"
                        />
                      </g>
                    </svg>
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