import React from "react";
import images from "../images/images.png"
function Span(props) {
  return (

    
      <div>
        <div class='col-auto'>
            <div class="border-0 bg-[#B7D3F2] shadow-lg w-[10vw] h-[15vw]  mx-auto  rounded-sm ">
                <div>

                    <img src={props.imglink} alt="img not found" class=" rounded-t-[1.5vw] h-[10vw] w-[10vw] p-2 " />
                </div>
                <div class=' text-center '>
                    <p class=' text-[0.5vw] text-white'>
                        An X'perience b'yond mere learning!
                    </p>

                    <h1 class='text-[#090a0a] py-1 text-[1vw]'>
                        {props.year}
                    </h1>
                    <p className="text-white underline text-[0.5vw]">
                        lora lumsum
                    </p>
                </div>

            </div>
            



        </div>

<div class=' py-2 '>
                <div class=' bg-cyan-500 border-cyan-500 h-[8vw] border-[0.1vw] w-[0vw] mx-auto'> </div>


            </div>

            <div class='grid grid-cols-3 grid-flow-col gap-4 py-2'>
                <div class="border-0 bg-[#B7D3F2] shadow-md w-[10vw] h-[15vw]    rounded-sm">
                    <div>

                        <img src={images} alt="img not found" class=" rounded-t-[1.5vw] h-[10vw] w-[10vw] p-2 " />
                    </div>
                    <div class=' text-center '>
                        <p class=' text-[0.5vw] text-white'>
                            An X'perience b'yond mere learning!
                        </p>

                        <h1 class='text-[#79BEEE] py-1 text-[1vw]'>
                            {props.year}
                        </h1>
                        <p className="text-white underline text-[0.5vw]">
                            lora lumsum
                        </p>
                    </div>

                </div>

                <div class="border-0 bg-[#B7D3F2] shadow-md w-[10vw] h-[15vw]    rounded-sm">
                    <div>

                        <img src={images} alt="img not found" class=" rounded-t-[1.5vw] h-[10vw] w-[10vw] p-2 " />
                    </div>
                    <div class=' text-center '>
                        <p class=' text-[0.5vw] text-white'>
                            An X'perience b'yond mere learning!
                        </p>

                        <h1 class='text-[#79BEEE] py-1 text-[1vw]'>
                            {props.year}
                        </h1>
                        <p className="text-white underline text-[0.5vw]">
                            lora lumsum
                        </p>
                    </div>

                </div>
                <div class="border-0 bg-[#B7D3F2] shadow-md w-[10vw] h-[15vw]    rounded-sm">
                    <div>

                        <img src={images} alt="img not found" class=" rounded-t-[1.5vw] h-[10vw] w-[10vw] p-2 " />
                    </div>
                    <div class=' text-center '>
                        <p class=' text-[0.5vw] text-white'>
                            An X'perience b'yond mere learning!
                        </p>

                        <h1 class='text-[#79BEEE] py-1 text-[1vw]'>
                            {props.year}
                        </h1>
                        <p className="text-white underline text-[0.5vw]">
                            lora lumsum
                        </p>
                    </div>

                </div>
                <div class="border-0 bg-[#B7D3F2] shadow-md w-[10vw] h-[15vw]    rounded-sm">
                    <div>

                        <img src={images} alt="img not found" class=" rounded-t-[1.5vw] h-[10vw] w-[10vw] p-2 " />
                    </div>
                    <div class=' text-center '>
                        <p class=' text-[0.5vw] text-white'>
                            An X'perience b'yond mere learning!
                        </p>

                        <h1 class='text-[#79BEEE] py-1 text-[1vw]'>
                            {props.year}
                        </h1>
                        <p className="text-white underline text-[0.5vw]">
                            lora lumsum
                        </p>
                    </div>

                </div>
            </div>

    
    </div>


     
    

  );
}
export default Span;
