const defaultArticles = [
  {
    slug: "first-article",
    title: "First Article",
    description: "This is the first default article",
    imageUrl: "https://edge-content-cdn.swordhealth.com/SWORD_headlign_206f17c711/SWORD_headlign_206f17c711.png",
    category: "Cat1",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    author: "jessicanovof",
    state: 'published',
  },
  {
    slug: "second-article",
    title: "Second Article",
    description: "This is the second default article",
    imageUrl: "https://noticias.up.pt/wp-content/uploads/2022/01/2022-01-10-noticias-up-sword-health-imagem-768x506.jpg",
    category: "Cat3",
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    author: "jessicanovof",
    state: 'published',
  },
  {
    slug: "third-article",
    title: "Third Article",
    description: "This is the third default article",
    imageUrl: "https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=3922bd9e-b76a-403d-be0a-7808900f428f",
    category: "Cat2",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    author: "Miguel",
    state: 'published',
  },
  {
    slug: "another-article",
    title: "Another Article",
    description: "This is the third default article",
    imageUrl: "https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=3922bd9e-b76a-403d-be0a-7808900f428f",
    category: "Cat2",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    author: "Miguel",
    state: 'published',
  },
  {
    slug: "other-article",
    title: "Other Article",
    description: "This is the third default article",
    imageUrl: "https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=3922bd9e-b76a-403d-be0a-7808900f428f",
    category: "Cat2",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    author: "Miguel",
    state: 'published',
  },
  {
    slug: "this-article",
    title: "This Article",
    description: "This is the third default article",
    imageUrl: "https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=3922bd9e-b76a-403d-be0a-7808900f428f",
    category: "Cat2",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    author: "Miguel",
    state: 'published',
  },
  {
    slug: "plus-article",
    title: "Plus Article",
    description: "This is the third default article",
    imageUrl: "https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=3922bd9e-b76a-403d-be0a-7808900f428f",
    category: "Cat2",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    author: "Miguel",
    state: 'published',
  },
  {
    slug: "more-article-1",
    title: "More Article",
    description: "This is the third default article",
    imageUrl: "https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=3922bd9e-b76a-403d-be0a-7808900f428f",
    category: "Cat2",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    author: "Miguel",
    state: 'published',
  },
  {
    slug: "more-article-2",
    title: "More Article",
    description: "This is the third default article",
    imageUrl: "https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=3922bd9e-b76a-403d-be0a-7808900f428f",
    category: "Cat2",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    author: "Miguel",
    state: 'published',
  },
  {
    slug: "more-article-3",
    title: "More Article",
    description: "This is the third default article",
    imageUrl: "https://static.globalnoticias.pt/dn/image.jpg?brand=DN&type=generate&guid=3922bd9e-b76a-403d-be0a-7808900f428f",
    category: "Cat2",
    content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.",
    author: "Miguel",
    state: 'published',
  },
  {
    slug: "fourth-article",
    title: "Fourth Article",
    description: "This is the fourth default article",
    imageUrl: "https://imagens.publico.pt/imagens.aspx/1549598?tp=UH&db=IMAGENS&type=JPG",
    category: "Cat1",
    content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    author: "João",
    state: 'draft',
  }
];

export default defaultArticles;
