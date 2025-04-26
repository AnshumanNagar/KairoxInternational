import { Outlet, Link } from "react-router-dom";

function HomeDecorComp(){
    return(
        <>
            <div className="w-full flex flex-wrap items-center justify-around bg-stone-100">
                <div className="flex-col flex-wrap w-sm lg:w-xl items-center bg-white p-5 rounded-3xl shadow-sm">
                    <h1 className="text-6xl text-center">New Generation <span className="text-stone-600">Education</span></h1><br/>
                    <p>At Kairox, we don’t just prepare students for the future — we co-create it with them. Our mission is to nurture visionary thinkers, ethical innovators, and resilient leaders through the fusion of technology, creativity, and humanity.</p>
                </div>
                <div className="flex-col justify-center p-10 rounded-4xl w-sm lg:w-xl m-10 items-center border-2 border-stone-500">
                    <h2 className="text-3xl text-center text-stone-900">OUR STORY</h2><br/>
                    <p className="text-black">At Kairox School of Futures, we didn’t set out to build just another school — we built a launchpad for the future. Here, students don’t merely prepare for what’s next; they create it. Rooted in breakthrough technologies, guided by deep human values, and fueled by imagination, Kairox is a space where bold ideas take form, where innovation is instinctive, and where learning is limitless. Our classrooms think, our campuses breathe, and our students explore realities far beyond textbooks. Every element of Kairox is designed to unlock the potential within — not just to keep up with the world, but to shape what the world becomes. This is where futures are not predicted, but engineered — one brilliant mind at a time.<br/><br/><Link to="/aboutPage"><a className="text-white cursor-pointer hover:bg-stone-950 p-3 bg-stone-700 rounded-4xl">Learn more</a></Link></p>
                </div>
            </div>

            <Outlet/>
        </>
    )
}

export default HomeDecorComp;