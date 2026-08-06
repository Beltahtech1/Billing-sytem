<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BELTAH TECH WIFI - High Speed Internet Solutions</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/lucide@latest"></script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .gradient-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .card-hover {
            transition: all 0.3s ease;
        }
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .pulse-animation {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: .7;
            }
        }
        .copy-notification {
            animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
            from {
                transform: translateY(-20px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">

    <!-- Navigation -->
    <nav class="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center space-x-2">
                    <i data-lucide="wifi" class="w-8 h-8 text-purple-600"></i>
                    <span class="text-xl font-bold text-gray-900">BELTAH TECH WIFI</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#packages" class="text-gray-600 hover:text-purple-600 font-medium transition">Packages</a>
                    <a href="#payment" class="text-gray-600 hover:text-purple-600 font-medium transition">Payment</a>
                    <a href="#contact" class="text-gray-600 hover:text-purple-600 font-medium transition">Contact</a>
                </div>
                <button onclick="scrollToSection('packages')" class="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition">
                    Subscribe Now
                </button>
                <button onclick="toggleMobileMenu()" class="md:hidden text-gray-600">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div id="mobileMenu" class="hidden md:hidden bg-white border-t">
            <div class="px-4 pt-2 pb-4 space-y-2">
                <a href="#packages" class="block py-2 text-gray-600 hover:text-purple-600">Packages</a>
                <a href="#payment" class="block py-2 text-gray-600 hover:text-purple-600">Payment</a>
                <a href="#contact" class="block py-2 text-gray-600 hover:text-purple-600">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 gradient-bg text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
                <span class="flex h-2 w-2 rounded-full bg-green-400 mr-2 pulse-animation"></span>
                <span class="text-sm font-medium">Now Available in Your Area</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                High-Speed Internet<br>for Everyone
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
                Fast, reliable, and affordable WiFi solutions by BELTAH TECH. Stay connected with the best internet packages tailored for you.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="scrollToSection('packages')" class="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                    View Packages
                </button>
                <button onclick="scrollToSection('payment')" class="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition">
                    Pay Now
                </button>
            </div>
            
            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div class="text-3xl font-bold">99%</div>
                    <div class="text-sm opacity-90">Uptime Guarantee</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div class="text-3xl font-bold">24/7</div>
                    <div class="text-sm opacity-90">Customer Support</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div class="text-3xl font-bold">Fast</div>
                    <div class="text-sm opacity-90">Installation</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Packages Section -->
    <section id="packages" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">Select the perfect package that fits your needs and budget. All plans include unlimited data.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Daily Plan -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
                    <div class="p-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-2xl font-bold text-gray-900">Daily Plan</h3>
                            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
                        </div>
                        <div class="flex items-baseline mb-6">
                            <span class="text-5xl font-bold text-gray-900">Ksh 30</span>
                            <span class="text-gray-500 ml-2">/day</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>5 Mbps Speed</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>Unlimited Data</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>1 Device Connected</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>24 Hours Validity</span>
                            </li>
                        </ul>
                        <button onclick="selectPackage('Daily Plan', 30)" class="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                <!-- Weekly Plan -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border-2 border-purple-500 relative transform scale-105">
                    <div class="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                        BEST VALUE
                    </div>
                    <div class="p-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-2xl font-bold text-gray-900">Weekly Plan</h3>
                        </div>
                        <div class="flex items-baseline mb-6">
                            <span class="text-5xl font-bold text-purple-600">Ksh 150</span>
                            <span class="text-gray-500 ml-2">/week</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>10 Mbps Speed</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>Unlimited Data</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>3 Devices Connected</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>7 Days Validity</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>Priority Support</span>
                            </li>
                        </ul>
                        <button onclick="selectPackage('Weekly Plan', 150)" class="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition shadow-lg">
                            Subscribe Now
                        </button>
                    </div>
                </div>

                <!-- Monthly Plan -->
                <div class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100">
                    <div class="p-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-2xl font-bold text-gray-900">Monthly Plan</h3>
                            <span class="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">Premium</span>
                        </div>
                        <div class="flex items-baseline mb-6">
                            <span class="text-5xl font-bold text-gray-900">Ksh 500</span>
                            <span class="text-gray-500 ml-2">/month</span>
                        </div>
                        <ul class="space-y-4 mb-8">
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>20 Mbps Speed</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>Unlimited Data</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>Unlimited Devices</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>30 Days Validity</span>
                            </li>
                            <li class="flex items-center">
                                <i data-lucide="check-circle" class="w-5 h-5 text-green-500 mr-3"></i>
                                <span>24/7 Premium Support</span>
                            </li>
                        </ul>
                        <button onclick="selectPackage('Monthly Plan', 500)" class="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Payment Section -->
    <section id="payment" class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Payment Method</h2>
                <p class="text-lg text-gray-600">Pay easily using our Till Number. Fast and secure.</p>
            </div>

            <div class="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <!-- Background Pattern -->
                <div class="absolute inset-0 opacity-10">
                    <div class="absolute transform rotate-45 translate-x-20 translate-y-20">
                        <i data-lucide="wifi" class="w-64 h-64"></i>
                    </div>
                </div>

                <div class="relative z-10 text-center">
                    <div class="mb-6">
                        <i data-lucide="smartphone" class="w-16 h-16 mx-auto mb-4 opacity-90"></i>
                        <h3 class="text-2xl font-bold mb-2">M-Pesa Payment</h3>
                        <p class="text-white/90">Use Lipa na M-Pesa to complete your subscription</p>
                    </div>

                    <div class="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-6 max-w-md mx-auto border-2 border-white/30">
                        <p class="text-sm uppercase tracking-wider mb-2 opacity-90">Till Number</p>
                        <div class="flex items-center justify-center gap-4 mb-4">
                            <span id="tillNumber" class="text-5xl md:text-6xl font-bold tracking-wider">7968544</span>
                            <button onclick="copyTillNumber()" class="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition" title="Copy Number">
                                <i data-lucide="copy" class="w-6 h-6"></i>
                            </button>
                        </div>
                        <div id="copyNotification" class="hidden bg-green-500/90 text-white px-4 py-2 rounded-lg text-sm copy-notification">
                            Number copied to clipboard!
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div class="flex items-center mb-2">
                                <span class="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">1</span>
                                <span class="font-semibold">Go to M-Pesa</span>
                            </div>
                            <p class="text-sm opacity-90">Select Lipa na M-Pesa</p>
                        </div>
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div class="flex items-center mb-2">
                                <span class="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">2</span>
                                <span class="font-semibold">Buy Goods</span>
                            </div>
                            <p class="text-sm opacity-90">Enter Till Number <strong>7968544</strong></p>
                        </div>
                        <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                            <div class="flex items-center mb-2">
                                <span class="bg-white text-purple-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">3</span>
                                <span class="font-semibold">Confirm</span>
                            </div>
                            <p class="text-sm opacity-90">Enter amount & PIN</p>
                        </div>
                    </div>

                    <div class="mt-8 p-4 bg-yellow-400/20 rounded-lg border border-yellow-400/30">
                        <p class="text-sm font-medium flex items-center justify-center gap-2">
                            <i data-lucide="info" class="w-5 h-5"></i>
                            After payment, send confirmation message to activate your account
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose BELTAH TECH?</h2>
                <p class="text-lg text-gray-600">Experience the difference with our premium service</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="zap" class="w-7 h-7 text-purple-600"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">Lightning Fast</h3>
                    <p class="text-gray-600 text-sm">High-speed fiber connections for seamless browsing</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="shield-check" class="w-7 h-7 text-blue-600"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">Secure Network</h3>
                    <p class="text-gray-600 text-sm">Enterprise-grade security for your protection</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="headphones" class="w-7 h-7 text-green-600"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">24/7 Support</h3>
                    <p class="text-gray-600 text-sm">Round-the-clock customer service assistance</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md text-center">
                    <div class="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i data-lucide="credit-card" class="w-7 h-7 text-orange-600"></i>
                    </div>
                    <h3 class="text-lg font-bold mb-2">Easy Payment</h3>
                    <p class="text-gray-600 text-sm">Simple M-Pesa Till payments. No hassle.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                    <p class="text-lg text-gray-600 mb-8">Have questions? We're here to help you get connected.</p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i data-lucide="phone" class="w-6 h-6 text-purple-600"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Phone</h3>
                                <p class="text-gray-600">+254 712 345 678</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i data-lucide="mail" class="w-6 h-6 text-purple-600"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Email</h3>
                                <p class="text-gray-600">support@beltah-tech.com</p>
                            </div>
                        </div>

                        <div class="flex items-start space-x-4">
                            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <i data-lucide="map-pin" class="w-6 h-6 text-purple-600"></i>
                            </div>
                            <div>
                                <h3 class="font-semibold text-gray-900">Location</h3>
                                <p class="text-gray-600">Nairobi, Kenya</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 rounded-2xl p-8">
                    <form onsubmit="handleContact(event)" class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input type="text" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition" placeholder="Your name">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                            <input type="tel" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition" placeholder="Your phone number">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                            <textarea rows="4" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center space-x-2 mb-4">
                        <i data-lucide="wifi" class="w-8 h-8 text-purple-400"></i>
                        <span class="text-2xl font-bold">BELTAH TECH WIFI</span>
                    </div>
                    <p class="text-gray-400 mb-4">Providing high-speed, reliable internet connectivity to homes and businesses across Kenya.</p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                            <i data-lucide="facebook" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                            <i data-lucide="twitter" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                            <i data-lucide="instagram" class="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#packages" class="hover:text-white transition">Packages</a></li>
                        <li><a href="#payment" class="hover:text-white transition">Payment</a></li>
                        <li><a href="#contact" class="hover:text-white transition">Contact</a></li>
                        <li><a href="#" class="hover:text-white transition">Terms of Service</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold mb-4">Payment Info</h4>
                    <div class="bg-gray-800 rounded-lg p-4">
                        <p class="text-sm text-gray-400 mb-1">Till Number</p>
                        <p class="text-2xl font-bold text-purple-400">7968544</p>
                    </div>
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2024 BELTAH TECH WIFI. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Modal for Subscription -->
    <div id="subscriptionModal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 relative">
            <button onclick="closeModal()" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
            
            <div class="text-center mb-6">
                <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i data-lucide="check-circle" class="w-8 h-8 text-purple-600"></i>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Complete Your Order</h3>
                <p class="text-gray-600">You're subscribing to <span id="selectedPackage" class="font-semibold text-purple-600"></span></p>
            </div>

            <div class="bg-gray-50 rounded-xl p-4 mb-6">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-gray-600">Package</span>
                    <span id="modalPackage" class="font-semibold"></span>
                </div>
                <div class="flex justify-between items-center text-lg font-bold border-t pt-2">
                    <span>Total</span>
                    <span id="modalPrice" class="text-purple-600"></span>
                </div>
            </div>

            <div class="space-y-3">
                <button onclick="processPayment()" class="w-full bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition">
                    Pay via M-Pesa
                </button>
                <button onclick="closeModal()" class="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition">
                    Cancel
                </button>
            </div>

            <p class="text-center text-sm text-gray-500 mt-4">
                Till Number: <span class="font-mono font-bold">7968544</span>
            </p>
        </div>
    </div>

    <script>
        // Initialize Lucide icons
        lucide.createIcons();
        // Mobile menu toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }
        // Smooth scroll
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }
        // Copy Till Number
        function copyTillNumber() {
            const tillNumber = document.getElementById('tillNumber').textContent;
            navigator.clipboard.writeText(tillNumber).then(() => {
                const notification = document.getElementById('copyNotification');
                notification.classList.remove('hidden');
                setTimeout(() => {
                    notification.classList.add('hidden');
                }, 2000);
            });
        }
        // Modal functions
        let selectedPlan = null;
        let selectedPrice = null;
        function selectPackage(plan, price) {
            selectedPlan = plan;
            selectedPrice = price;
            document.getElementById('selectedPackage').textContent = plan;
            document.getElementById('modalPackage').textContent = plan;
            document.getElementById('modalPrice').textContent = 'Ksh ' + price;
            document.getElementById('subscriptionModal').classList.remove('hidden');
            lucide.createIcons();
        }
        function closeModal() {
            document.getElementById('subscriptionModal').classList.add('hidden');
        }
        function processPayment() {
            alert(`Please send Ksh ${selectedPrice} to Till Number: 7968544\n\nAfter payment, you will receive an SMS with your WiFi voucher code.`);
            closeModal();
            scrollToSection('payment');
        }
        // Contact form
        function handleContact(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            e.target.reset();
        }
        // Close modal on outside click
        document.getElementById('subscriptionModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    </script>
<script src="https://deepsite.hf.co/deepsite-badge.js"></script>
</body>
</html>
