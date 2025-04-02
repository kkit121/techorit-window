import nodemailer from 'nodemailer';

export const contect = async (req, res) => {
    try {
        // console.log("Request Body:", req.body); // Debugging ✅
        
        const { name, email, service, message } = req.body;

        if (!name || !email || !service || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }
        sendMail(name,service,message,email)

        // const newContact = new Contect({ name, email, service, message });
        // await newContact.save();

        return res.status(201).json({
            message: "Contact form submitted successfully"
           
        });
    } catch (error) {
        console.error("Error in contact form submission:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

 const sendMail= async(name,service,message,gmail)=>{
 const transpot= nodemailer.createTransport({
service:'Gmail',
auth:{
    user:process.env.MAIL,
    pass:process.env.PASS
}
 });
 const mailoption ={
    from:process.env.MAIL,
    to: process.env.MAIL,
    subject:'This is subject',
    text:`Name:${name}  Service: ${service}  message:${message} gmail:${gmail}
    `
 };
 await transpot.sendMail(mailoption);
 }