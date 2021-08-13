import Post from './post';

export async function seedPost() {
  try {
    for (let i = 0; i < 10; i++) {
      await Post.create({
        title: `POST #${i}`,
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac suscipit ipsum. In at sollicitudin risus. Aliquam elit justo, cursus in ultricies sed, varius nec lectus. Quisque posuere, ipsum ac vehicula tempor, magna risus sodales eros, non convallis tellus mauris nec velit. Praesent ac mi vel arcu feugiat cursus viverra vitae mauris. Pellentesque nec ante dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean eu dui dignissim, viverra quam eget, porttitor velit. Vestibulum dapibus nunc id metus maximus interdum. Fusce cursus ultrices lectus, a faucibus orci mollis ac. Maecenas sit amet nisl finibus, sagittis nunc sed, feugiat orci. Cras tristique aliquam ornare. Suspendisse metus justo, pretium a magna vitae, aliquet volutpat leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vehicula eleifend nulla et molestie.',
      });
    }
  } catch (error) {
    console.error(error);
  }
}
