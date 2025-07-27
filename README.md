# LLM Injection Prevention Demo

_Demonstrating prompt injection mitigation techniques with Next.js and Vercel AI SDK_

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)

## Overview

This repository demonstrates effective techniques for preventing prompt injection attacks in LLM-powered applications. Built with Next.js and Vercel's AI SDK, it showcases security best practices for AI chat applications including input validation, output sanitization, and safe prompt engineering.

### Key Features

- **🛡️ Prompt Injection Prevention**: Demonstrates multiple layers of protection against malicious prompts
- **� Input Sanitization**: Implements proper validation and filtering of user inputs
- **⚡ Vercel AI SDK Integration**: Shows secure implementation patterns with modern AI frameworks
- **🎯 System Prompt Protection**: Techniques to prevent system prompt extraction and manipulation
- **💬 Safe Chat Interface**: Secure chat implementation with proper context handling
- **📱 Mobile Responsive**: Works seamlessly on all devices

## Technology Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **AI/ML**: Groq API with DeepSeek R1 Distill model, Vercel AI SDK
- **Security**: Input validation, output sanitization, prompt isolation
- **UI Components**: Radix UI, Lucide React icons
- **Deployment**: Vercel

## Setup & Installation

### Prerequisites

1. **Groq API Key**: For the chat functionality
2. **Node.js**: Version 18 or higher

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Groq Configuration
GROQ_API_KEY=your_groq_api_key_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd prompt-injection-prevention-next
   ```

2. **Install dependencies**:

   ```bash
   nvm use
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## Security Demonstrations

This project showcases several prompt injection prevention techniques:

### 1. System Prompt Protection

- Isolated system prompts that are not directly exposed to user input
- Clear separation between system instructions and user messages

### 2. Input Validation

- Proper sanitization of user inputs before processing
- Length limits and content filtering

### 3. Output Control

- Controlled response generation with predefined boundaries
- Prevention of system information leakage

### 4. Context Isolation

- Safe handling of conversation context
- Prevention of context manipulation attacks

## Testing Injection Attempts

You can test the application's resistance to common prompt injection techniques:

1. **System Prompt Extraction**: Try asking the bot to reveal its system instructions
2. **Role Manipulation**: Attempt to change the bot's role or behavior
3. **Context Pollution**: Try to inject malicious context into the conversation
4. **Output Manipulation**: Attempt to control the format or content of responses

The application demonstrates how proper implementation can resist these attacks while maintaining functionality.

## Learning Objectives

By exploring this codebase, you'll learn:

- How to implement secure AI chat applications
- Best practices for prompt engineering in production
- Techniques for input validation and output control
- Methods to prevent common LLM vulnerabilities
- Integration patterns with Vercel AI SDK
