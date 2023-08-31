import Link from 'next/link'

export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center blue_gradient '> NPC Village</h1>

      {/* <br className='max-md:hidden' /> */}

      <p> This is a place where you can find all the NPCs you need for your game. </p>
      <p> You can find the NPCs by searching for them in the search bar or by clicking on the categories on the left. </p>

      <Link href="/login">Login</Link>

    </section>
  )
}
