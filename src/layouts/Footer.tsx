type FooterProps = {
	children: React.ReactNode; // bu component için çocuk component geçicem.
};

// <div>Alt Bilgi</div>

// <Footer /> self closing tag yapılan componentlerde component içine component göndremeyiz

/* <Footer> 
        <AltBilgi /> 
        <Copyright /> 
   </Footer>

*/
// { basename, children, future, window, }: BrowserRouterProps
export default function Footer({ children }: FooterProps) {
	return <>{children}</>;
}
