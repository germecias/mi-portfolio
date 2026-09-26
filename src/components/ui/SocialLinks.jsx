import { motion } from 'framer-motion'
import { socialLinks } from '../../data/social'

import instagramIcon from '../../assets/icons/instagram.svg'
import whatsappIcon from '../../assets/icons/whatsapp.svg'

const iconMap = {
  instagram: instagramIcon,
  whatsapp: whatsappIcon,
}

export default function SocialLinks({ delay = 1.4 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="flex items-center gap-5 mt-8"
    >
      {socialLinks.map((social) => (
          <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="social-icon"
          style={{ '--icon-url': `url("${iconMap[social.id]}")` }}
        />
      ))}
    </motion.div>
  )
}