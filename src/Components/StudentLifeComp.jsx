export default function StudentLifeComp(){
    return(
        <>
            <div className="w-full p-15 flex flex-col flex-wrap bg-stone-100">
                <h1 className="text-6xl text-center">Student Life</h1><br/><br/>
                <p>Not Just School — A Living, Breathing Experience of the Future: At Kairox School of Futures, student life is more than a routine — it’s an exploration. A curated, dynamic environment where every moment is engineered for growth, discovery, and connection. We don’t believe in passive education — we create an active, participatory lifestyle that prepares young minds to lead, create, and live fully in a world yet to come. The day doesn’t start with bells — it begins with intention. Students begin with optional guided meditation, movement-based learning, or a walk through our AI-assisted nature trails that adapt audio experiences based on the student’s mood or curiosity. Wellness, focus, and mental clarity are priorities from the very first hour. Forget boring lectures. Our classes are alive — with movement, discussion, tech-integration, and collaborative design. Classrooms are built to flex and transform, shifting between solo pods, group innovation labs, and immersive VR domes. Subjects are approached through missions, projects, or simulations — making learning feel like living a story. Students work in diverse teams, with peers from different grades and sometimes even different countries (via our virtual partnership network). Rather than competing for grades, they collaborate to build products, pitch solutions, or solve real-world problems. Everyone learns at their own pace, and everyone’s contribution matters.</p><br/><br/><br/>
                <h1 className="text-center text-4xl">Testimonials</h1><br/><br/><hr className="text-stone-400"/><br/><br/>
                <div className="flex flex-col w-full">
                    <div className="bg-stone-200 w-full flex flex-wrap items-center justify-between rounded-4xl p-10">
                        <img src="/src/assets/student1.jpg" className="rounded-4xl w-sm shadow-sm"/>
                        <div className="flex flex-col m-10 lg:w-3/5 items-center">
                            <h1 className="text-2xl text-right">Leila K., Grade 7 – Mindful Creator 🌿</h1><br/>
                            <p>At my old school, I always felt anxious. Tests made me freeze up. But Kairox is completely different. We start the day with breathing or walking meditations. Teachers actually ask how we’re feeling before anything else. I get to paint in VR, write stories that come alive, and even work on my own comic book about climate heroes. It’s the first time I’ve felt like my creativity really matters. It’s not just school — it’s where I’m becoming me.</p>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="bg-black w-full flex flex-wrap items-center justify-between rounded-4xl p-10">
                        <div className="flex flex-col m-10 lg:w-3/5 items-center">
                            <h1 className="text-2xl text-right text-white">Zayn R., Grade 5 – Digital Storyteller 🎮</h1><br/>
                            <p className="text-stone-200">At my old school, I always felt anxious. Tests made me freeze up. But Kairox is completely different. We start the day with breathing or walking meditations. Teachers actually ask how we’re feeling before anything else. I get to paint in VR, write stories that come alive, and even work on my own comic book about climate heroes. It’s the first time I’ve felt like my creativity really matters. It’s not just school — it’s where I’m becoming me.</p>
                        </div>
                        <img src="/src/assets/student2.jpg" className="rounded-4xl w-sm shadow-sm"/>
                    </div>
                    <br/><br/>
                    <div className="bg-stone-200 w-full flex flex-wrap items-center justify-between rounded-4xl p-10">
                        <img src="/src/assets/student3.jpg" className="rounded-4xl w-sm shadow-sm"/>
                        <div className="flex flex-col m-10 lg:w-3/5 items-center">
                            <h1 className="text-2xl text-right">Rayan S., Grade 8 – Young Innovator 🛠️</h1><br/>
                            <p>I always loved building things, but at Kairox, I learned to turn my ideas into impact. In the Future Builders Lab, I created a low-cost sensor that tracks air quality in my neighborhood. My mentors helped me get real data, and now we’re working with a local NGO to scale it. Being at Kairox makes you feel like you're not waiting for the future — you're making it happen, right now.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}