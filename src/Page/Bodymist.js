import Footer from "../Component/Footer/footer";
import Navbar from "../Component/Navbar/navbar";


export default function Bodymist(){
    return(
        <>
            <Navbar/>
            <section className="my-8 flex flex-col px-9 justify-center bona-nova-regular gap-3 lg:gap-6 md:px-20 lg:px-40 ">
                <div className="flex gap-3 align-middle">
                    <h1 className="text-4xl lg:text-7xl text-nowrap md:text-5xl">Embrace your</h1>
                    <img className="h-14 lg:h-32 w-full object-cover rounded-lg" src="https://s3-alpha-sig.figma.com/img/09e6/0f0b/a2243afdaeebd2e68085d2b4dfde6523?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S5VXMwL4yJt6hT-C74hNcH4uFOe7rnTclMtbl2cpgBx1MODhEwInscW0k6Y0DrSM0bSYYmUehxszwgGaDyRfeaExI~y1Z0Dy3PJe5tSelS9csWOj-QbFZCwkXKxHQHDVwDLc7e8fnIXTuB3cufuH8tqk5Kz~TIaJmoTlKFQocpuGsqIFe-ugy~tlsOeQeXYDvRvZ2Orcfr7Uz6xoOCLIRQ8TaxNKoqikGIdeS5OZwcH82WUchqAAT~NHF7jGdAgVbFDFmuJMxUn6Y4QtL-ztDRicccdBYvAQFcqW8pG~N57h8NqDj1aGliGNoWQJv2thTX9HNEzTQBoNvpVhZw9Q2g__"/>
                </div>
                <div className="flex justify-between gap-4 align-middle">
                    <img className="h-32 lg:h-64 w-full object-cover rounded-xl" src="https://s3-alpha-sig.figma.com/img/2f2d/febf/98adc00ba114ebfb52bc192c10cf8e58?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gS30rvGVE4PmRxopAAYEbX1BwMN~SC5LWSBHrFgHWz2E~1ZAj1nsHXfMgyQuScZ1M4BjiEHg0oBxiih2ancjlCD5eQXaQX1qpNMNod1j8aZX2Xt51hC9edRhz7WurmOVnjGEezXXHLpBTcMLrvO7oB-Vx0V6at5t3rZQVb~saIadNCYNgKEz-BU1j3Bd-z1-z2BlCgn31L3tC-cd994UZLHJ3iL0MiSrDnJB6GtoEyR4ld4TwbRc7venCgf4IiJZckaqB9gch~FHESIbqIXSvDAI4gAQv6iKixlv5vV98qYGlV9Jvk0haApP8GPRKkcogxLf4vqPWvAJC-0kH8qNfQ__"/>
                    <div className="flex flex-col justify-between">
                        <h1 className="text-2xl lg:text-7xl md:text-4xl">Radiance</h1>
                        <p className="text-xs lg:text-2xl md:text-lg">Experience enchanting moments with our chic body mists.</p>
                        <div className="flex">
                            <hr className="w-full shrink bg-black translate-y-3 h-px md:h-1"/>
                            <span className="text-xl">&#10022;</span> 
                        </div>
                    </div>
                </div>
            </section>
            <section class="mt-12 flex flex-col justify-center px-9 md:px-20 lg:px-40">
                <div class="flex flex-col-reverse gap-5 lg:flex-row">
                    <div class="flex gap-5 lg:flex-col justify-start">
                        <img class="w-1/2 lg:w-full lg:h-52 rounded-lg object-cover" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                        <div>
                            <h1 class="text-2xl lg:text-3xl">Geneve</h1>
                            <p class=" p-1 text-xs lg:text-sm">Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit</p>
                            <button class="lg:ml-1 text-sm lg:text-base mt-2 bg-gray-800 text-white px-3 py-0.5 rounded-full lg:rounded-lg">Details</button>
                        </div>
                    </div>
                    <img class="h-64 lg:h-96 xl:h-108 w-full lg:w-2/3 object-cover rounded-lg md:h-80" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                </div>
            
                <div class="flex flex-col gap-5 lg:flex-row mt-20">
                    <img class="h-64 lg:h-96 xl:h-108 w-full lg:w-2/3 object-cover rounded-lg md:h-80" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                    <div class="flex gap-5 lg:flex-col justify-start">
                        <img class="w-1/2 lg:w-full lg:h-52 rounded-lg object-cover" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                        <div>
                            <h1 class="text-2xl lg:text-3xl">Geneve</h1>
                            <p class=" p-1 text-xs lg:text-sm">Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit</p>
                            <button class="lg:ml-1 text-sm lg:text-base mt-2 bg-gray-800 text-white px-3 py-0.5 rounded-full lg:rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </section>
            <section  className="relative my-10 lg:my-16 bona-nova-regular h-96 md:h-128 lg:h-170 text-white bg-black -z-20 p-10 lg:p-28">
                <img className="h-full w-full absolute left-0 top-0 object-cover opacity-70 -z-10" src="https://s3-alpha-sig.figma.com/img/3816/345b/044416872085c45895699087e9101dd7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pG~e6fXlTyGHgzLC4JfQsLBdQaQJ1TUKzQ385TWBWOpBXpF6tUt05blIrDclhtxtJvYhptO5Vh92qH-pCw0K18QpnRZ-o8ezclSlYWsiWn~R5IDbmu0HY18kEJ12rtSJ9tmWzhZb8hG6mDMM5AxYxQkxlU1KMYB6~35iqMmkN-qdl8qgVZD4KsR6FTET2BX2YSUxTUzGEXqlDYfeIJjMUYJ5kIT1EKW3WocEr3Ch9JWZyDdTcT3Vv0T693PdO-P-BSdYmILqhnDmfefDXXivYcKbUhbs2uB0ACXQjR-PuPS0mM0J43kbtqOAuaxqYigwAtlrrgv2Y1OiDZIbRaxrLg__"/>
                <h1 className="text-5xl lg:text-9xl z-10 mt-4">Spritz On</h1>
                <h1 className="text-5xl lg:text-9xl">Confidence</h1>
                <div className="absolute right-10 lg:right-28 lg:bottom-32 bottom-16 w-48 lg:w-80">
                    <h3 className="text-2xl lg:text-5xl">T.I.P.S.Y</h3>
                    <p className="text-sm lg:text-xl">Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit</p>
                </div>
            </section>
            <section class="mt-12 flex flex-col justify-center px-9 md:px-20 lg:px-40 mb-12">
                <div class="flex flex-col-reverse gap-5 lg:flex-row">
                    <div class="flex gap-5 lg:flex-col justify-start">
                        <img class="w-1/2 lg:w-full lg:h-52 rounded-lg object-cover" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                        <div>
                            <h1 class="text-2xl lg:text-3xl">Geneve</h1>
                            <p class=" p-1 text-xs lg:text-sm">Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit</p>
                            <button class="lg:ml-1 text-sm lg:text-base mt-2 bg-gray-800 text-white px-3 py-0.5 rounded-full lg:rounded-lg">Details</button>
                        </div>
                    </div>
                    <img class="h-64 lg:h-96 xl:h-108 w-full lg:w-2/3 object-cover rounded-lg md:h-80" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                </div>
            
                <div class="flex flex-col gap-5 lg:flex-row mt-20">
                    <img class="h-64 lg:h-96 xl:h-108 w-full lg:w-2/3 object-cover rounded-lg md:h-80" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                    <div class="flex gap-5 lg:flex-col justify-start">
                        <img class="w-1/2 lg:w-full lg:h-52 rounded-lg object-cover" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                        <div>
                            <h1 class="text-2xl lg:text-3xl">Geneve</h1>
                            <p class=" p-1 text-xs lg:text-sm">Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit</p>
                            <button class="lg:ml-1 text-sm lg:text-base mt-2 bg-gray-800 text-white px-3 py-0.5 rounded-full lg:rounded-lg">Details</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}