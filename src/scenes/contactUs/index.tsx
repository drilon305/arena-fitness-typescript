import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HText from "@/shared/HText";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {

    const inputStyles = `"w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"`

    
const { register, trigger, formState: { errors },  } = useForm();

const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if(!isValid) {
            e.preventDefault();
        }
}


  return (
    <section id="contactus" className="mx-auto w-5/6 p-24">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
    {/* HEADER */}
    <motion.div 
    className="md:w-3/5" 
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
       hidden: { opacity: 0, x:-50},
       visible: { opacity: 1, x: 0 }
    }}
    >
        <HText>
            <span className="text-priamry-500">JOIN NOW</span> TO GET IN SHAPE
        </HText>
        <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quae recusandae ullam eveniet nobis fugiat quaerat voluptas necessitatibus voluptatem cupiditate.</p>
    </motion.div>
        {/* FORM AND IMAGE */}

        <div className="mt-10 justify-between gap-8 md:flex">
        <motion.div
        className="mt-10 basis-3/5 md:mt-0"
        initial='hidden'
    whileInView='visible'
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
       hidden: { opacity: 0, y: 50},
       visible: { opacity: 1, y: 0 }
    }}
        >
            <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/navycrack1@gmail.com"
            method="POST"
            >
                <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                    required: true,
                    maxLength: 100,
                })}
                />
                {errors.name && (
                    <p className="mt-1 text-primary-500 ">
                        {errors.name.type === "required" && "This field is required."}
                        {errors.name.type === "maxLength" && "Max length is 100 char."}
                    </p>
                )}
            </form>

        </motion.div>
        </div>
        </motion.div>
    </section>
  )
}

export default ContactUs