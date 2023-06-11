import React, { useState, useEffect } from "react";
import './Vns.css';
import img1 from "../../Assets/Var-3.jpg"
import img2 from "../../Assets/Var-1.jpg"
import img3 from "../../Assets/Var-2.jpg"

const Vns = () => {
    const [Img, setRoom1] = useState(img1);

    useEffect(() => {
        const timer = setTimeout(() => {
            switch (Img) {
                case img1:
                    setRoom1(img2);
                    break;
                case img2:
                    setRoom1(img3);
                    break;
                case img3:
                    setRoom1(img1);
                    break;
                default:
                    setRoom1(img1);
            }
        }, 4000);
        return () => clearTimeout(timer);
    }, [Img]);
    return (
        <section className="secion">
            <div className="contr1">
                <div className="about-wrapper">
                    <div className="image-container">
                        <img src={Img} alt="Varanasi" className="about-image" />
                    </div>
                    <div className="content-container">
                        <h2>About Varanasi</h2>
                        <p>
                            Varanasi, also known as Kashi or Benares, is a city located on the banks of the sacred Ganges River in the state of Uttar Pradesh, India. It is one of the oldest inhabited cities in the world, with a rich history dating back thousands of years.
                        </p>
                        <p>
                            Varanasi is renowned as a major spiritual and cultural center. The city is considered the spiritual capital of India, attracting millions of pilgrims and tourists from all over the world who come to experience its profound spirituality, ancient temples, and vibrant rituals.
                        </p>
                        <p>
                            The city is famous for its numerous ghats, the series of steps leading down to the Ganges River. Each ghat has its own significance and purpose, whether it's for bathing, religious ceremonies, or cremation rituals. Witnessing the mesmerizing Ganga Aarti ceremony at Dashashwamedh Ghat is an unforgettable experience.
                        </p>
                        <p>
                            Varanasi is also known for its rich cultural heritage. It has been a hub of art, music, and learning for centuries. The city is home to renowned universities, music schools, and artisans who specialize in traditional crafts like silk weaving and woodwork.
                        </p>
                        <p>
                            Exploring the narrow alleys and bustling markets of Varanasi is a delightful adventure. From vibrant silk sarees and handcrafted jewelry to delicious street food and local delicacies, the city offers a sensory feast for visitors.
                        </p>
                        <p>
                            Whether you seek spiritual enlightenment, cultural immersion, or an extraordinary travel experience, Varanasi promises to captivate and inspire. Plan your visit to this mystical city and let its timeless charm leave an indelible mark on your soul.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vns;
