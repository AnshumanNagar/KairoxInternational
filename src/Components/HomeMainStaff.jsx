function HomeMainStaffComp(){
    return(
        <>
            <div className="flex-col flex-wap p-10 bg-black">
                <div className="flex flex-wrap justify-evenly">
                    <div className="p-10 flex-col lg:w-1/3 m-5 bg-stone-300 rounded-3xl self-center">
                        <h1 className="text-4xl text-center text-stone-800">PATRON</h1><br/>
                        <img src="/src/assets/patron.jpg" className="rounded-4xl"/><br/><br/>
                        <p className="text-stone-700">Alakh Pandey, commonly known as "Alakh Sir," is an Indian educator, entrepreneur, and the Founder and CEO of Physics Wallah (PW), an ed-tech company. He gained popularity for his online physics lessons, particularly for JEE and NEET preparation, and later expanded PW to offer courses for various competitive exams. </p>
                    </div>

                    <div className="p-10 flex-col lg:w-1/3 m-5 bg-stone-300 rounded-3xl">
                        <h1 className="text-4xl text-center text-stone-800">PRINCIPLE DIRECTOR</h1><br/>
                        <img src="/src/assets/principle.jpg" className="rounded-4xl "/><br/><br/>
                        <p className="text-stone-700">Shobhit Nirwan, a prominent YouTube star, is celebrated for his academic study advice and tutorials, amassing over 2.9 million subscribers on his channel. His real name is Shobhit Nirwan, and he has also garnered a significant following on Instagram, with more than 900,000 followers.</p>
                    </div>
                </div><br/><br/>
                <h1 className="text-stone-200 text-center text-4xl">VICE PRINCIPLES</h1><br/>
                <hr className="text-stone-200 m-2"/>
                <div className="flex flex-wrap justify-evenly p-10">
                    <div className="p-10 flex-col lg:w-1/4 m-5 bg-stone-300 rounded-3xl">
                        <img src="/src/assets/vp1.jpg" className="rounded-4xl"/><br/><br/>
                        <p className="text-stone-700">About. With over 9 years dedicating in the field of education, I am a well known Educator of Social Science across India. Starting from a small offline coaching, I expanded my reach by creating multiple YouTube channels and collaborating with leading ed-tech platforms.</p>
                    </div>

                    <div className="p-10 flex-col lg:w-1/4 m-5 bg-stone-300 rounded-3xl">
                        <img src="/src/assets/vp2.jpg" className="rounded-4xl"/><br/><br/>
                        <p className="text-stone-700">Prashant Kirad (Paper Leaker)
                        Known for his deep knowledge and teaching skills, Prashant Kirad has earned the nickname “The Paper Leaker” among students. This name isn't about leaks but rather a tribute to how thoroughly he covers key exam topics, helping students feel exceptionally prepared for their exams!</p>
                    </div>

                    <div className="p-10 flex-col lg:w-1/4 m-5 bg-stone-300 rounded-3xl">
                        <img src="/src/assets/vp3.jpg" className="rounded-4xl"/><br/><br/>
                        <p className="text-stone-700">Ajey Nagar, better known as CarryMinati, is an Indian YouTuber, streamer and rapper. He is known for his roasting videos, comedic skits and reactions to various online topics on his channel CarryMinati. His other channel CarryisLive is dedicated to gaming and live streams.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeMainStaffComp;
