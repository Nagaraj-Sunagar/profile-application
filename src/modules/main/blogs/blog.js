import React from 'react';
import './blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-post">
        {/* Blog Heading */}
        <h1>Understanding ChatGPT: A New Era of AI</h1>

        {/* Blog Image */}
        <img 
          src="https://via.placeholder.com/800x400" 
          alt="ChatGPT AI" 
          className="blog-image"
        />

        {/* Blog Content */}
        <div className="blog-content">
          <p>
            ChatGPT is an AI language model developed by OpenAI, based on the GPT (Generative Pre-trained Transformer) architecture. It can understand and generate human-like text based on the prompts it receives. ChatGPT has been widely adopted for a variety of applications, from answering questions to generating creative writing.
          </p>
          <p>
            What makes ChatGPT revolutionary is its ability to generate coherent and contextually relevant text. Its underlying model has been trained on vast amounts of text data, enabling it to respond intelligently to a wide array of prompts. The model can be fine-tuned for specific tasks, such as writing essays, providing customer support, or even tutoring in academic subjects.
          </p>
          <p>
            The rise of AI tools like ChatGPT has led to debates on its ethical use, potential job displacement, and its impact on human creativity. While AI offers exciting possibilities, there are still concerns regarding its limitations, biases, and misuse.
          </p>
          <p>
            As technology evolves, the future of AI seems promising, with advancements in natural language processing continuing to push the boundaries of what’s possible. Tools like ChatGPT are just the beginning of what AI can achieve in helping humans with tasks and improving productivity across various industries.
          </p>
        </div>
      </div>

      {/* Related Blogs Section */}
      <div className="related-blogs">
        <h2>Related Blogs</h2>
        <ul>
          <li>Introduction to AI: What You Need to Know</li>
          <li>The Ethics of AI: Balancing Innovation and Responsibility</li>
          <li>How AI is Transforming the Job Market</li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;
