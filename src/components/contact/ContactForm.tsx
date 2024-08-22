export default function ContactForm() {
    return <form>
        <input type="text" id="name" name="name" placeholder="Your Name" />
        
        <input type="email" id="email" name="email" placeholder="Email" />

        <input type="tel" id="phone" name="phone" placeholder="Phone Number" />
        
        <textarea id="message" name="message" placeholder="Message" rows={6}></textarea>
        
        <button type="submit">Send Message</button>
    </form>
}