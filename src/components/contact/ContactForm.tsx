export default function ContactForm() {
    return <form action='mailto:ahmedgouasmia.ag@gmail.com'>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        
        <input type="email" id="email" name="email" placeholder="Email" required />

        <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
        
        <textarea id="message" name="message" placeholder="Message" rows={6} required></textarea>
        
        <button type="submit">Send Message</button>
    </form>
}