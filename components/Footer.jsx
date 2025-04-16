const Footer = () => {
  return (
    <footer className="relative inset-x-0 bottom-0 bg-[var(--main-color)]">
      <div className="container mx-auto px-4 text-white py-5 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pornpimon Pradabsri. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
export default Footer