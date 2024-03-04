import React from "react";
import Footer from "../Component/Footer/footer";
import Navbar from "../Component/Navbar/navbar";

export default function Fragrance(){
    return(
        <>
            <Navbar/>
            <div className="px-9 md:px-20 lg:px-24 overflow-hidden bona-nova-regular">
                <section class="flex justify-between gap-5 items-end lg:items-center md:gap-16 md:justify-center">
                    <div class="flex flex-col gap-2 mb-5">
                        <div class="flex flex-row items-center justify-between">
                            <h1 class="text-2xl lg:text-5xl md:text-3xl">World Class</h1>
                            <span class="lg:text-xl lg:translate-y-1">&#10022;</span> 
                            <hr class="w-16 lg:w-28 lg:translate-y-1 shrink bg-black" style={{height:'2px'}}/>
                        </div>
                        <div class="flex justify-between items-center gap-5">
                            <img class="h-10 w-full rounded-full object-cover" src="https://s3-alpha-sig.figma.com/img/ada0/7214/19652b1664ebe3a756faade9864e5622?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jKDFmaw-mrWpDWJI4AU7W3UQoIT2prOyZFlBbkGq5YziKm2CCMCSldYd3vET2TIWuuciK81OvBim4TFmPcbqvL~Lmki6un4e7EuF23KoY2JO-YAJKIN2FN~aqNIfx10SoZbv11O0WKBbTsqJs-ulkcXWVZZCA0DJ1bW6JYQzfpwkAlrbGao3VV-Kp~30~A1RK7co4Stapt0QOHpwZaRA0HJNTwKbHtyHWYSFlxUyu4o8ziuyBtRyS5x9~AUB4J-OBlV7REiuZet5B7flePtuhpK33VQhXdGydaPLK7drvTyF2UmpZMPyd97teoC6fF1M9z~8qbS~IL1MOkQQZcUbQw__"/>
                            <h1 class="text-2xl lg:text-5xl md:text-3xl">Fragrance</h1>
                        </div>
                        <div class="mt-2 lg:text-base text-xs md:text-sm">
                            <p>Perfect harmony of delicate touches and warmth, creating an unforgettable trail of luxury.</p>
                        </div>
                    </div>
                    <div>
                        <img class="h-44 lg:h-64 lg:w-56 rounded-full object-cover" src="https://s3-alpha-sig.figma.com/img/42b9/2037/f5e77cd3af964b6ee0bb51b427ad44d6?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SL~72eMpqqMz5Sd2COvCi9K1LHPvBr8LDVVtw1Tcrlcd7ZszFuBM~X2um0ZLWJaVmrVTXl7GKzgPS65HFU8m2bjLbmUQNKDihtYJ3NlEPG2BaKa99Z-B~5UhRHtJX5-r51HKjL2tjerntHGojdfvWhzCWItoe4r-XMpnsvpToHxXYoBdR7BL~3XXs7v1RpBToAVBT3uF6IzmW3zmW8stAtEJJn1IWpJJ8fUyFAqcFKBG8x6YQjDicN3PcpYpE262NHLRIvYTlOzu0rX4q-OPk7~5g~lbGYfQaRN9SzT0BqUzhv3553-brJZVR2dzkxcvcMPaG7moy6l71dLvjrS2qQ__"/>
                    </div>
                </section>

                <section class="mt-12 flex flex-col justify-center">
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

                <section class="my-16 lg:my-24 relative">
                    <div class="flex justify-between items-center md:justify-center md:gap-4">
                        <div class="lg:text-3xl md:text-2xl">
                            <h1>A Fragrance Is A Delightful Aroma.</h1>
                            <h1>Often Characterized By Its</h1>
                        </div>
                        <img class="w-20 h-10 lg:w-40 lg:h-16 rounded-full" src="https://s3-alpha-sig.figma.com/img/cdb3/0a7c/0bbcefe90c5b8b8608d5eb5fa2c0d561?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nk2RgxclST0pBmF59D63vyqv3WIvBkj3XaUJjqNoNivSjWkR0Ibgm8xrceWDYrDL7BtEGeOWexjRy6E4o-CA0rQNB7ddQBWTCIRImPzTiE6af1cQcjWTznjKgW7cskfLQ3WiO7K8ArdJmhSCNQxElg8Qe4ABAYS4wQm8dI1faeQobvsqVgdbgbwimygqp1-A69jKzsKRObLutWj-77SOxqxKzjynz6ujDKS5dUbhGRLvjo5tmqNvyV7cLzPiOgjl-yBtS4wwB9sy1DQF1jha~X4TdUf2MHT6qm0zG9bbW4Pyurq8JnpppIZCYjuncfygMP7v4Bm663K5PeLZwRoZJA__"/>
                    </div>
                    <div class="flex justify-between items-center md:justify-center md:gap-4">
                        <hr class="w-32 lg:w-64 bg-black" style={{height:'2px'}}/>
                        <p class="text-xs lg:text-base">&#10022; </p>
                        <h1 class="lg:text-3xl md:text-2xl">Pleasant Or Sweet Scent.</h1>
                    </div>
                    <div class="">
                        <img class="h-24 w-24 object-cover absolute -top-10 -rotate-45 -z-10 -right-10" style={{filter: 'blur(1px)'}} src="https://s3-alpha-sig.figma.com/img/d9b9/6ccb/7e396a36b03305954b89bae34b7643b7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKtUwVTScwvGWCL4jDCw~9iTsLDGfS8BdtgtE-g3WO-gejNtaVEOCECJML8HCRUMjQmd0c7WLOrjPdW0m-u2r5vO9XAcGKJHtFjm7uGpxv-FNGt4HVygTxZZzW~4zmJvigQHp5e4RW3M-CSNzt6jUhW6TOrykqHh423LAWbw1QxV8AxhBxR6VQDRErg6p0yUxmsuKCMTcWye6rNLd2ksaSKMP9gq53Ov~dyF45o9D~7UXb7ZtqDZmz~fTgTXSi8BzM3go6L1RM1ur-9grqggqT-L5hBZtibTDL2UxIRNzCP7MgxS4M2DbRG8JAe6B9uFfOyCWZ8fJgyxF5HOTgtGbQ__"/>
                        <img class="h-24 w-24 object-cover absolute top-0 rotate-12 -z-10 -left-20" style={{filter: 'blur(1px)'}} src="https://s3-alpha-sig.figma.com/img/d9b9/6ccb/7e396a36b03305954b89bae34b7643b7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKtUwVTScwvGWCL4jDCw~9iTsLDGfS8BdtgtE-g3WO-gejNtaVEOCECJML8HCRUMjQmd0c7WLOrjPdW0m-u2r5vO9XAcGKJHtFjm7uGpxv-FNGt4HVygTxZZzW~4zmJvigQHp5e4RW3M-CSNzt6jUhW6TOrykqHh423LAWbw1QxV8AxhBxR6VQDRErg6p0yUxmsuKCMTcWye6rNLd2ksaSKMP9gq53Ov~dyF45o9D~7UXb7ZtqDZmz~fTgTXSi8BzM3go6L1RM1ur-9grqggqT-L5hBZtibTDL2UxIRNzCP7MgxS4M2DbRG8JAe6B9uFfOyCWZ8fJgyxF5HOTgtGbQ__"/>
                    </div>
                </section>

                <section class="my-12 flex flex-col justify-center">
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
                        <div class="flex gap-4 lg:flex-col justify-start">
                            <img class="w-1/2 lg:w-full lg:h-52 rounded-lg object-cover" src="https://s3-alpha-sig.figma.com/img/0ca1/9b18/65fb73f13e329fa8788cc42ca64e25ac?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ASmSKcY3SynTpmBlZV78IsnDbBEcVzJ53O1u63LmJrJxzA7kjWxNs70eorrSt0PNEfs48ljIUKrbk3GXlgQrJjMdr-qEPTg1gS2t14coErGHZadgvY~Gv7WmKgP5ute4ZZO634i5S-6CgkqWioVz-1nBBY1~KzKeiV8tumCNrXg95TWIWshIRiiodi1ycy23EKCUGdirxMl7a4m11VQbTdVBGjpBdQIZPmIcXIpO1jeaw1Idq1fiPF-uehgxXyHfaIUnsYnwbFuj-OaFgYSZHYxkI50r1XHgndY7Fb~NO98~kmg5~y1aqfrRLNzKzCd41mEHULcPIRvRYrcTLUjVmg__"/>
                            <div>
                                <h1 class="text-2xl lg:text-3xl">Geneve</h1>
                                <p class=" p-1 text-xs lg:text-sm">Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit</p>
                                <button class="lg:ml-1 text-sm lg:text-base mt-2 bg-gray-800 text-white px-3 py-0.5 rounded-full lg:rounded-lg">Details</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    );
}