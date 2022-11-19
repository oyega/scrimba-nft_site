const containerOne = document.getElementById("container-one")
const containerTwo = document.getElementById("container-two")
const containerThree = document.getElementById("container-three")
const footer = document.getElementById("footer")

containerTwo.innerHTML = `
<h2>Meta-Pigeon Sneaker NFT $33,000</h2>
<img  src="images/sneakers-purple.png" alt="Purple and silver sneakers" class="main-image">
<p><strong>At $33k, this NFT sneaker is super good value!</strong></p>
<p>If you've got lots of money and you're a bit daft, NFTs are a great way to pay for something that doesn't have any intrinsic value or even exist. Tech fashionistas are jumping on the NFT bandwagon and spending eye-watering sums of money on crypto images. Our advice: spend the weekend <a href="">crafting an NFT</a> and by this time next week,you'll be a millionaire.</p>
<a href="#" class="btn btn-dark">Buy NFTs</a>
<a href="#" class="btn btn-mid">More info</a>
`

containerOne.innerHTML = `
<h1>Oyega Insanely Expensive Wears</h1>
<h3>(Also known as NFTs)</h3>
`

containerThree.innerHTML = `
<h2>For the true Crypto-connoisseur</h2>
					<div class="section-two-image-container">
						<img src="images/crypto-punk.jpg" alt="punk with blach hair and red and blue glasses" class="feature-image">
						<img src="images/bag.svg" alt="Seven items from a game listed in white on a black background" class="feature-image">
					</div>
					<p>
                        Is $33k for sneakers too basic for you? No problem! This CryptoPunk 
                        (left) is a steal at $6.6 million! Which makes Bag #748 (right) a 
                        total bargain at $1.4 million. And by the way, that's not a VS Code 
                        screenshot we included by mistake. The eight lines of white text on a 
                        black background is the actual NFT we're selling.
                    </p>
					<a href="#" class="btn btn-light">About Us</a>
					<a href="#" class="btn btn-mid">Contact</a>
					<p>
                        Still not convinced? To be honest, nor are we. That's why we're 
                        selling them, not buying them.
                    </p>
                    `

footer.innerHTML = `<p>&copy; 2022 oyega.com</p>`