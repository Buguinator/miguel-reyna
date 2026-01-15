// "use client"
// import Image from "next/image"

// const cards = [
//   {
//     bgColor: "bg-[#f97316]",
//     title: "The Guiding Light",
//     description:
//       "Lighthouses have stood as beacons of hope for centuries, guiding sailors safely through treacherous waters. Their glowing light and towering presence serve as a reminder of humanity’s connection to the sea.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1739262161806-d954eb02427c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
//   },
//   {
//     bgColor: "bg-[#0015ff]",
//     title: "Life Beneath the Waves",
//     description:
//       "From shimmering schools of fish to solitary hunters, the ocean is home to an incredible variety of marine life. Each species plays a vital role in maintaining the balance of underwater ecosystems.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1739200616200-69a138d91627?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
//   },
//   {
//     bgColor: "bg-[#ff5941]",
//     title: "Alone on the Open Sea",
//     description:
//       "Drifting across the endless horizon, traveling alone on the sea is a test of courage and resilience. With nothing but the waves and the sky, solitude becomes both a challenge and a source of deep reflection.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1738597190290-a3b571590b9e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxxdGU5Smx2R3d0b3x8ZW58MHx8fHx8",
//   },
//   {
//     bgColor: "bg-[#1f464d]",
//     title: "The Art of Sailing",
//     description:
//       "Harnessing the power of the wind, sailing is both a skill and an adventure. Whether racing across the waves or leisurely cruising, it’s a timeless way to explore the vast blue expanse.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1738935247245-97940c74cced?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTZ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     bgColor: "bg-[#0015ff]",
//     title: "The Era of Whaling",
//     description:
//       "Once a thriving industry, whale hunting shaped economies and cultures across the world. Today, efforts to protect these majestic creatures highlight the shift toward conservation and respect for marine life.",
//     image:
//       "https://plus.unsplash.com/premium_vector-1738935247692-1c2f2c924fd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8cXRlOUpsdkd3dG98fGVufDB8fHx8fA%3D%3D",
//   },
// ]

export default function Itinerary() {
  return (
    <section className="mobile-prest">
      <div
        style={{ minHeight: "300vh" }}
        className="relative flex flex-col px-4 pt-32 pb-12 font-sans text-gray-700 bg-stone-50"
      >
        <div style={{ textAlign: "center" }} className="flex-1 space-y-8">
          {/* Card: Ceremonia Religiosa */}
          <div
            style={{ top: "calc(1rem * 1)" }}
            className="sticky w-full max-w-5xl mx-auto space-y-4 bg-white/70 backdrop-blur-md border border-sky-100/50 rounded-lg shadow-xl pt-12 "
          >
            <div className="flex  items-center justify-center">
              <svg className="h-12 w-12" viewBox="0 0 356 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M210 137H356V201H210V562H146V201H0V137H146V0H210V137Z" fill="black" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-4 md:px-12">
              <h2 className="space-y-1 text-2xl font-semibold leading-none text-gray-900">

                <span className="block text-2xl md:text-3xl font-serif font-normal pb-8">Ceremonia Religiosa</span>
              </h2>
              <p className="text-lg/5 font-normal text-gray-900">Arquidiócesis de Hermosillo <br />Templo Expiatorio</p>
              <p className="text-sm font-normal text-gray-500">Gral. Antonio Villarreal 27, <br />Country Club, Hermosillo, Sonora</p>
              <p className="text-2xl font-light text-black py-8">5:30 pm</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.609559682836!2d-110.93989077301634!3d29.092740741372175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce85c8c080cd43%3A0x44fad840823a2dda!2sArquidi%C3%B3cesis%20de%20Hermosillo%20Templo%20Expiatorio!5e0!3m2!1ses-419!2smx!4v1768410259203!5m2!1ses-419!2smx" style={{ border: "0", width: "100%", height: "auto", minHeight: "400px" }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* Card: Recepción */}
          <div
            style={{ top: "calc(1rem * 1)" }}
            className="sticky w-full max-w-5xl mx-auto space-y-4 bg-amber-50/50 backdrop-blur-md border border-amber-100/50 rounded-lg shadow-xl pt-12 "
          >
            <div className="flex  items-center justify-center">
              <svg fill="#000000" className="h-12 w-12" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 302.25 302.25" >
                <g>
                  <g>
                    <path d="M290.192,270.772c-1.689-4.674-6.846-7.096-11.522-5.407l-18.417,6.652l-30.2-83.612
			c22.259-12.605,32.906-39.835,23.931-64.686L211.445,5.945c-1.689-4.674-6.846-7.097-11.522-5.407l-48.798,17.625L102.326,0.538
			C97.65-1.151,92.492,1.27,90.804,5.945L48.265,123.719c-8.975,24.85,1.672,52.081,23.931,64.685l-30.2,83.612l-18.417-6.652
			c-4.674-1.688-9.834,0.732-11.522,5.407c-1.688,4.675,0.732,9.834,5.407,11.522l53.763,19.419c1.01,0.365,2.042,0.538,3.057,0.538
			c3.684,0,7.142-2.28,8.465-5.945c1.688-4.675-0.732-9.834-5.407-11.522l-18.417-6.652l30.194-83.596
			c3.144,0.571,6.315,0.862,9.481,0.862c7.747,0,15.466-1.706,22.687-5.095c12.932-6.069,22.727-16.811,27.58-30.247l2.257-6.248
			l2.257,6.248c4.853,13.436,14.648,24.178,27.58,30.247c7.222,3.389,14.939,5.095,22.687,5.095c3.166,0,6.337-0.291,9.481-0.862
			l30.194,83.596l-18.417,6.652c-4.675,1.688-7.096,6.847-5.407,11.522c1.324,3.665,4.781,5.945,8.465,5.945
			c1.015,0,2.047-0.173,3.057-0.538l53.763-19.419C289.46,280.605,291.881,275.447,290.192,270.772z M191.089,35.401
			c-1.014-2.161-2.845-3.83-5.09-4.641l-8.381-3.027l19.955-7.208l19.676,54.474l-43.31,15.643l17.467-48.36
			C192.217,40.037,192.103,37.562,191.089,35.401z M131.938,153.94c-3.22,8.914-9.718,16.041-18.297,20.067
			c-8.579,4.026-18.213,4.472-27.127,1.251c-18.401-6.646-27.964-27.024-21.318-45.425l13.691-37.904l66.743,24.107L131.938,153.94z
			 M151.744,99.107L85,74.999l19.676-54.474l66.744,24.107L151.744,99.107z M215.736,175.259
			c-8.914,3.219-18.549,2.775-27.128-1.252c-8.58-4.026-15.078-11.153-18.297-20.067l-9.617-26.626l5.295-14.661l57.375-20.723
			l13.69,37.904C243.7,148.235,234.137,168.613,215.736,175.259z"/>
                  </g>
                </g>
              </svg>
            </div>
            <div className="flex flex-col items-center gap-4 md:px-12">
              <h2 className="space-y-1 text-2xl font-semibold leading-none text-gray-900">

                <span className="block text-2xl md:text-3xl font-serif font-normal pb-8">Recepción</span>
              </h2>
              <p className="text-lg/5 font-normal text-gray-900">Salón Las Cascadas</p>
              <p className="text-sm font-normal text-gray-500">Los Molinos 97, Las Minitas,<br />Hermosillo, Sonora</p>
              <p className="text-2xl font-light text-black py-4">8:00 pm - 1:00 am</p>
              <div className="flex flex-col gap-2  bg-yellow-100 py-4 px-6 rounded-lg">
                <p className="text-xs/5 font-sm text-yellow-700">Con todo respeto, NO niños.</p>
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3487.7804291308476!2d-110.99278412448372!3d29.053074875437783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ce848684c0d1fd%3A0x906b7921c982ba2e!2sSalon%20Las%20Cascadas!5e0!3m2!1ses-419!2smx!4v1768413949764!5m2!1ses-419!2smx" style={{ border: "0", width: "100%", height: "auto", minHeight: "350px" }}
              loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* Card: Código de Vestimenta */}
          <div
            style={{ top: "calc(1rem * 1)" }}
            className="sticky w-full max-w-5xl mx-auto space-y-4 bg-white/50 backdrop-blur-md border border-sky-100/50 rounded-lg shadow-xl pt-12 "
          >
            <div className="flex  items-center justify-center">
              <svg className="h-16" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M312.5 83.3334L250 125L187.5 83.3334M312.5 83.3334C324.729 93.9376 352.708 110.271 354.083 128.042C354.708 135.729 351.5 139.938 345.042 148.354C331 166.708 312.5 177.5 312.5 208.333H187.5C187.5 177.521 169 166.708 154.958 148.354C148.521 139.938 145.292 135.75 145.896 128.042C147.292 110.271 175.292 93.9584 187.5 83.3334M312.5 83.3334V41.6667M187.5 83.3334V41.6667M197.917 208.333H302.083M375 395.833C416.667 395.833 437.5 350.563 437.5 350.563C378.646 312.313 343.75 267.375 324.729 233.438C317.5 220.521 313.875 214.063 309 211.188C304.125 208.333 297.604 208.333 284.563 208.333H215.417C202.375 208.333 195.854 208.333 190.979 211.188C186.104 214.042 182.479 220.5 175.25 233.438C156.25 267.375 121.354 312.292 62.5 350.563C62.5 350.563 83.3333 395.833 125 395.833" stroke="black" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M285.542 291.667C292.625 308.25 323.354 347.313 357.104 381.458C369.542 394.063 375.771 400.354 374.917 411.042C374.083 421.708 368.875 425.271 358.458 432.396C334.792 448.542 298.667 458.333 250 458.333C201.333 458.333 165.208 448.563 141.521 432.396C131.104 425.271 125.896 421.708 125.062 411.042C124.229 400.354 130.458 394.063 142.896 381.458C176.646 347.313 207.396 308.25 214.458 291.667" stroke="black" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M697.687 42.8785C696.733 43.572 694.046 47.9928 691.706 52.6737L687.458 61.342L648.364 72.4375C626.867 78.5053 608.403 84.053 607.363 84.6598C605.022 86.1334 603.549 91.161 599.215 112.312C586.386 175.07 578.757 264.874 577.11 373.315L576.504 411.629L578.757 413.882L581.011 416.136H603.549H626.086L625.566 420.904C625.133 425.411 625.22 425.758 627.993 428.358C632.501 432.606 644.463 440.147 652.872 444.048C668.995 451.503 687.805 456.097 709.389 457.744C723.345 458.871 737.388 458.264 740.335 456.357C741.635 455.577 743.282 451.936 745.883 443.875C747.963 437.72 749.87 432.606 750.13 432.606C750.39 432.606 752.297 437.72 754.377 443.875C756.978 451.936 758.625 455.577 759.925 456.357C762.786 458.264 776.915 458.871 790.871 457.831C812.195 456.184 831.612 451.416 847.822 443.875C855.883 440.061 867.846 432.519 872.267 428.358C875.04 425.758 875.127 425.411 874.694 420.904L874.174 416.136H896.711H919.249L921.329 413.969L923.496 411.889V392.992C923.41 324.512 918.729 239.649 911.794 180.791C906.333 135.283 897.318 88.2138 893.417 85.0065C892.464 84.3131 874 78.6787 852.243 72.4375L812.715 61.1687L808.468 52.587C806.214 47.9061 803.527 43.572 802.573 42.8785C801.186 41.8383 792.085 41.6649 750.13 41.6649C708.175 41.6649 699.074 41.8383 697.687 42.8785ZM788.704 57.8747C788.444 59.2616 787.577 62.3822 786.884 64.8093L785.583 69.4036H750.13H714.677L713.376 64.8093C712.683 62.3822 711.816 59.2616 711.556 57.8747L710.949 55.5343H750.13H789.311L788.704 57.8747ZM721.611 145.511C734.874 192.58 742.762 222.053 742.415 223.093C741.982 224.306 735.654 215.378 715.543 185.212L689.192 145.685L695.433 136.323C704.795 122.107 704.101 120.113 688.152 116.126C682.43 114.652 677.663 113.352 677.49 113.179C677.316 113.092 682.17 102.95 688.325 90.8143C694.393 78.592 699.594 68.7968 699.854 69.0568C700.027 69.3169 709.909 103.73 721.611 145.511ZM822.77 113.179C822.597 113.352 817.83 114.652 812.108 116.126C796.159 120.113 795.465 122.107 804.827 136.323L811.068 145.685L783.156 187.553C767.727 210.524 755.418 228.554 755.678 227.6C756.978 222.486 799.713 70.5304 800.059 69.4036C800.406 68.6234 805.174 77.2917 811.762 90.5542C818.003 102.863 822.944 113.092 822.77 113.179ZM669.515 97.1422C664.314 107.631 659.98 117.166 659.98 118.293C659.98 122.02 662.58 124.014 669.948 125.834C673.762 126.788 678.356 128.001 680.09 128.435L683.384 129.302L678.53 136.583C674.802 142.131 673.762 144.471 674.022 146.292C674.196 147.592 688.498 169.783 705.662 195.614L736.954 242.51L733.14 255.859L729.326 269.208V322.518V375.828L736.001 392.558L742.675 409.288L737.041 426.365C731.666 442.574 731.32 443.355 728.806 444.048C724.819 445.175 699.594 443.181 688.498 440.928C682.951 439.714 675.322 437.72 671.595 436.507C655.819 431.132 640.042 422.117 640.042 418.477C640.042 416.223 644.29 379.382 644.897 376.435L645.243 374.528H671.335H697.34L699.42 372.361C701.587 370.281 701.587 370.107 701.587 353.724C701.587 337.341 701.587 337.168 699.42 335.087L697.34 332.92H673.849C652.178 332.92 650.444 332.834 650.444 331.36C650.444 330.58 652.611 311.77 655.299 289.579L660.066 249.271L640.042 172.296C628.947 129.908 620.105 95.2351 620.192 95.0618C620.452 94.8884 677.056 78.5053 678.876 78.1586C678.963 78.0719 674.802 86.6535 669.515 97.1422ZM851.549 86.7402C867.066 91.161 879.895 94.8884 880.068 95.0618C880.155 95.1484 871.313 129.908 860.218 172.296L840.194 249.271L844.961 289.579C847.649 311.77 849.816 330.58 849.816 331.36C849.816 332.834 848.082 332.92 826.411 332.92H802.92L800.84 335.087C798.673 337.168 798.673 337.341 798.673 353.724C798.673 370.107 798.673 370.281 800.84 372.361L802.92 374.528H828.925H855.017L855.363 376.435C855.97 379.382 860.218 416.223 860.218 418.477C860.218 422.117 844.008 431.392 828.665 436.507C824.851 437.807 817.223 439.801 811.762 440.928C800.753 443.181 775.528 445.175 771.454 444.048C769.027 443.355 768.594 442.488 762.699 424.718C759.232 414.576 753.424 398.8 749.783 389.698L743.195 373.315V322.952V272.676L764.693 240.429L786.104 208.183L811.068 208.097H836.033L838.113 205.93C839.5 204.629 840.28 202.809 840.28 201.162C840.28 199.515 839.5 197.695 838.113 196.394L836.033 194.227H816.009C805.087 194.227 796.072 194.054 796.072 193.794C796.072 193.534 802.92 183.132 811.242 170.563C820.863 156.26 826.411 147.072 826.411 145.685C826.411 144.471 824.244 140.31 821.644 136.41L816.876 129.302L820.17 128.435C821.904 128.001 826.498 126.788 830.312 125.834C837.68 124.014 840.28 122.02 840.28 118.293C840.28 117.166 835.946 107.544 830.659 97.0555C825.371 86.4801 821.644 78.0719 822.25 78.2452C822.857 78.5053 836.033 82.3193 851.549 86.7402ZM781.076 85.1799C778.562 95.1484 750.477 194.227 750.13 194.227C749.783 194.227 721.698 95.1484 719.184 85.1799L718.751 83.2729H750.13H781.509L781.076 85.1799ZM629.554 186.859L646.024 250.138L636.922 325.466C631.981 366.9 627.907 401.14 627.907 401.573C627.907 401.92 619.499 402.267 609.097 402.267H590.373L590.98 369.154C592.453 283.338 597.134 216.852 605.803 156.52C609.877 128.521 611.524 119.68 612.39 121.847C612.824 122.8 620.539 152.099 629.554 186.859ZM891.424 136.67C898.272 176.457 903.559 229.161 906.593 287.412C908.067 315.064 909.627 367.334 909.627 388.571V402.267H890.99C880.762 402.267 872.353 401.92 872.353 401.573C872.353 401.14 868.279 366.9 863.338 325.466L854.236 250.138L870.273 188.593C879.115 154.786 886.743 125.574 887.176 123.667C887.696 121.847 888.216 120.547 888.39 120.72C888.65 120.893 889.95 128.088 891.424 136.67ZM687.718 353.724V360.659H667.261H646.804L647.41 354.331C647.757 350.95 648.191 347.83 648.451 347.396C648.624 347.05 657.552 346.79 668.301 346.79H687.718V353.724ZM851.809 347.396C852.069 347.83 852.503 350.95 852.85 354.331L853.456 360.659H832.999H812.542V353.724V346.79H831.959C842.708 346.79 851.636 347.05 851.809 347.396Z" fill="black" />
                <path d="M759.232 293.479C753.164 299.46 761.919 309.256 768.16 303.448C770.587 301.107 771.367 298.074 769.98 295.473C767.553 290.879 762.699 289.925 759.232 293.479Z" fill="black" />
                <path d="M759.232 348.957C754.898 353.204 757.932 360.659 764 360.659C767.554 360.659 770.934 357.278 770.934 353.724C770.934 350.17 767.554 346.79 764 346.79C762.353 346.79 760.532 347.57 759.232 348.957Z" fill="black" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h2 className="space-y-1 text-2xl font-semibold leading-none text-gray-900">
                <span className="block text-2xl md:text-3xl font-serif font-normal pb-12">Código de Vestimenta</span>
              </h2>
              <p className="text-xl/5 font-normal text-gray-900">Mujeres</p>
              <p className="text-sm font-normal text-gray-500">Vestido Largo</p>
              <p className="text-xl/5 font-normal text-gray-900 pt-4">Hombres</p>
              <p className="text-sm font-normal text-gray-500">Traje Formal</p>
              <div className="flex flex-col gap-2  bg-red-100 my-16 py-6 px-12 rounded-lg">
                <p className="text-lg/5 font-normal text-red-700">Evitar colores</p>
                <p className="text-sm font-normal text-gray-600">Blanco · Vino · Rosa Palo</p>
              </div>
            </div>
          </div>
          {/* Card: Padres de Novia y Novio */}
          <div
            style={{ top: "calc(1rem * 1)" }}
            className="sticky w-full max-w-5xl mx-auto space-y-4 bg-amber-50/50 backdrop-blur-md border border-amber-100/50 rounded-lg shadow-xl md:px-12 px-4 md:py-24 py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center gap-4 ">
                <div className="flex flex-col gap-2 bg-amber-700/10 md:py-16 py-14 md:px-12 px-6 items-center justify-center rounded-lg md:min-h-[250px] min-h-[175px] w-full">
                  <h2 className="space-y-1 text-2xl font-semibold leading-none text-gray-900">
                    <span className="block text-xl md:text-2xl font-serif font-normal md:pb-8 pb-4">Padres de la Novia</span>
                  </h2>
                  <div className="flex text-sm/4 font-normal text-gray-900">
                    <svg className="h-4 w-4" viewBox="0 0 356 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M210 137H356V201H210V562H146V201H0V137H146V0H210V137Z" fill="black" />
                    </svg>
                    <p>María Eduviges Córdova Velducea</p>
                  </div>
                  <div className="flex text-sm/4 font-normal text-gray-900">
                    <svg className="h-4 w-4" viewBox="0 0 356 562" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M210 137H356V201H210V562H146V201H0V137H146V0H210V137Z" fill="black" />
                    </svg>
                    <p>Ángel Grijalva Morales</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-2  bg-amber-700/10 md:py-16 py-14 md:px-12 px-6 items-center justify-center rounded-lg md:min-h-[250px] min-h-[175px] w-full">
                  <h2 className="space-y-1 text-2xl font-semibold leading-none text-gray-900">
                    <span className="block text-xl md:text-2xl font-serif font-normal md:pb-8 pb-4">Padres del Novio</span>
                  </h2>
                  <p className="text-sm/4 font-normal text-gray-900"> Elsa Arroyo Pinedo</p>
                  <p className="text-sm/4 font-normal text-gray-900">Miguel Ángel Ibarra Galindo</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col gap-2  bg-amber-700/10 md:py-16 py-14 md:px-12 px-6 items-center justify-center rounded-lg md:min-h-[250px] min-h-[175px] w-full">
                  <h2 className="space-y-1 text-2xl font-semibold leading-none text-gray-900">
                    <span className="block text-xl md:text-2xl font-serif font-normal md:pb-8 pb-4">Padrinos</span>
                  </h2>
                  <p className="text-sm/4 font-normal text-gray-900">Ana Elvia Ríos Chávez</p>
                  <p className="text-sm/4 font-normal text-gray-900">Severiano Córdova Velducea</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card: Mesa de regalos */}
          <div
            style={{ top: "calc(1rem * 1)" }}
            className="sticky w-full max-w-5xl mx-auto space-y-4 bg-white/50 backdrop-blur-md border border-sky-100/50 rounded-lg shadow-xl pt-12 "
          >
            <div className="flex  items-center justify-center">
              <svg className="h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H2" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 2V22" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M13 12C13 14.2091 14.7909 16 17 16" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M11 12C11 14.2091 9.20914 16 7 16" stroke="#020202" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 10.0352C12 8.54529 13.014 7.24659 14.4594 6.88524C16.0631 6.48431 17.5158 7.93697 17.1148 9.5407C16.7535 10.9861 15.4548 12.0001 13.9649 12.0001H12V10.0352Z" stroke="#020202" strokeWidth="1.5" />
                <path d="M12.0001 10.0352C12.0001 8.54529 10.9861 7.24659 9.5407 6.88524C7.93698 6.48431 6.48431 7.93697 6.88524 9.5407C7.24659 10.9861 8.54529 12.0001 10.0352 12.0001H12.0001V10.0352Z" stroke="#020202" strokeWidth="1.5" />
                <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#020202" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-4 px-16">
              <h2 className="space-y-1 text-2xl font-semibold leading-none text-gray-900">
                <span className="block text-2xl md:text-3xl font-serif font-normal pb-12">Mesa de Regalos</span>
              </h2>
              <p className="text-lg/6 font-normal text-gray-900">BBVA – Reyna Eduwiges Grijalva Córdoba</p>
              <p className="text-lg/6 font-normal text-gray-500">4152 3140 3063 9432</p>
              <p className="text-lg/6 font-normal text-gray-900">BBVA – Miguel Ángel Ibarra Arroyo</p>
              <p className="text-lg/6 font-normal text-gray-500">4152 3145 0401 8980</p>
              <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51805587" target="_blank" rel="noopener noreferrer">
                <p className="text-lg/6 font-normal text-gray-900 pt-4">Liverpool</p>
                <p className="text-lg/6 font-normal text-gray-500 underline flex items-center gap-1">
                  No. 51805587
                  <span className="text-gray-500">
                    <svg className="w-6 h-6 stroke-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H8M17 7V16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </p>
              </a>
              <div className="flex flex-col gap-2  bg-sky-100 my-16 py-6 px-4 rounded-lg">
                <p className="text-sm font-normal text-gray-700">También se recibirá efectivo durante el evento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
