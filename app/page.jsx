import Link from 'next/link'

export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
<<<<<<< HEAD
      <h1 className='head_text text-center blue_gradient height=auto'> NPC Village</h1>

      <br className='max-md:hidden' />
=======
      <h1 className='head_text text-center blue_gradient '> NPC Village</h1>

      {/* <br className='max-md:hidden' /> */}
>>>>>>> b53a0355dc2f85aed967787077e5a4cb2708351f

      <p> This is a place where you can find all the NPCs you need for your game. </p>
      <p> You can find the NPCs by searching for them in the search bar or by clicking on the categories on the left. </p>

      <Link href="/login">Login</Link>

    </section>
  )
}
