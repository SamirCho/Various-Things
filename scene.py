from manim import *

class Example(Scene):
    def construct(self):
        prev=[]
        myTemplate = TexTemplate()
        myTemplate.add_to_preamble(r"\\usepackage{amsmath}")
        
        text = Tex(r"Today we will evaluate this cool integral",r"\\[5pt]","using Feynman's technique of integration.",r"\[\int_{0}^{\frac{\pi}{2}}ln(1+4sin^2(x))dx\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Define the following function",r"\[I(a)=\int_{0}^{\frac{\pi}{2}}ln(1+asin^2(x))dx\]",r"Note that our target integral is $I(4)$ and $I(0)=0$.",r"\\[5pt]",r"To slightly simplify future steps",r"\\[5pt]",r"we will add the condition $a\ge0$.", font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Differentiate both sides of the equation with respect to $a$",r"\\[5pt]",r"and apply the Leibniz Rule \[I'(a)=\frac{d}{da}(\int_{0}^{\frac{\pi}{2}}ln(1+asin^2(x))dx)\]",r"\[I'(a)=\int_{0}^{\frac{\pi}{2}}\frac{\partial}{\partial a}(ln(1+asin^2(x)))dx\]",r"\[I'(a)=\int_{0}^{\frac{\pi}{2}}\frac{sin^2(x)}{1+asin^2(x)}dx\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Apply the King's Property",r"\\[5pt]",r"and use the fact that $sin(\frac{\pi}{2}-x)=cos(x)$",r"\[I'(a)=\int_{0}^{\frac{\pi}{2}}\frac{sin^2(\frac{\pi}{2}-x)}{1+asin^2(\frac{\pi}{2}-x)}dx\]",r"\[I'(a)=\int_{0}^{\frac{\pi}{2}}\frac{cos^2(x)}{1+acos^2(x)}dx\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Divide all terms in the fraction by $cos^2(x)$",r"\[I'(a)=\int_{0}^{\frac{\pi}{2}}\frac{1}{sec^2(x)+a}dx\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Use the trigonometric identity: $sec^2(x)=tan^2(x)+1$",r"\[I'(a)=\int_{0}^{\frac{\pi}{2}}\frac{1}{tan^2(x)+1+a}dx\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Expand the fraction with $sec^2(x)$",r"\[I'(a)=\int_{0}^{\frac{\pi}{2}}\frac{sec^2(x)}{(tan^2(x)+1+a)(sec^2(x))}dx\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Use the trigonometric identity: $sec^2(x)=tan^2(x)+1$",r"\[I'(a)=\int_{0}^{\frac{\pi}{2}}\frac{sec^2(x)}{(tan^2(x)+1+a)(tan^2(x)+1)}dx\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"let $u=tan(x)$",r"\\[5pt]",r"$du=sec^2(x)dx$",r"\\[5pt]",r"$u(0)=0$",r"\\[5pt]",r"$\lim_{x\to(\frac{\pi}{2})^-} u(x)\to\infty$",r"\[I'(a)=\int_{0}^{\infty}\frac{1}{(u^2+1+a)(u^2+1)}du\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)
        
        text = Tex(r"Partial fraction decomposition",r"\[I'(a)=\int_{0}^{\infty}\frac{-1/a}{u^2+1+a}du+\int_{0}^{\infty}\frac{1/a}{u^2+1}du\]",r"\[I'(a)=\int_{0}^{\infty}\frac{-1/a}{u^2+(\sqrt{1+a})^2}du+\int_{0}^{\infty}\frac{1/a}{u^2+1^2}du\]",r"\[I'(a)=\frac{-1}{a}\int_{0}^{\infty}\frac{1}{u^2+(\sqrt{1+a})^2}du+\frac{1}{a}\int_{0}^{\infty}\frac{1}{u^2+1^2}du\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)
        
        text = Tex(r"Now we can integrate using",r"\[\int_{0}^{\infty}\frac{1}{u^2+b^2}du=\frac{\pi}{2b}\]",r"\[I'(a)=\frac{-1}{a}\frac{\pi}{2\sqrt{1+a}}+\frac{1}{a}\frac{\pi}{2}\]",r"\[I'(a)=\frac{\pi}{2a}-\frac{\pi}{2a\sqrt{1+a}}\]",r"\[I'(a)=\frac{\pi}{2}(\frac{1}{a}-\frac{1}{a\sqrt{1+a}})\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)
        
        text = Tex(r"Now we can integrate both sides of the equation",r"\\[5pt]",r"with respect to $a$ to get $I(a)$ back.",r"\\[5pt]",r"Since we are applying indefinite integrals to both sides,",r"\\[5pt]",r"after this step the two sides of the equation",r"\\[5pt]",r"may differ by a constant.",r"\[I(a)-C=\frac{\pi}{2}(\int\frac{1}{a}da-\int\frac{1}{a\sqrt{1+a}}da)\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)
        
        text = Tex(r"Off to the side",r"\[B=\int\frac{1}{a\sqrt{1+a}}da\]",r"let $v^2=1+a$",r"\\$2vdv=da$",r"\\$v=\sqrt{1+a}$",r"\\$a=v^2-1$",r"\[B=\int\frac{2v}{(v^2-1)v}dv\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)
        
        text = Tex(r"\[B=\int\frac{2}{v^2-1}dv\]",r"\[B=\int\frac{2}{(v-1)(v+1)}dv\]",r"Partial fraction decomposition",r"\[B=\int\frac{1}{v-1}dv+\int\frac{-1}{v+1}dv\]",r"\[B=ln(v-1)-ln(v+1)\]",r"\[B=ln(\sqrt{1+a}-1)-ln(\sqrt{1+a}+1)\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"\[B=ln(\frac{\sqrt{1+a}-1}{\sqrt{1+a}+1})\]",r"Expand the fraction with the",r"\\[5pt]",r"radical conjugate of the numerator",r"\[B=ln(\frac{(\sqrt{1+a}-1)(\sqrt{1+a}+1)}{(\sqrt{1+a}+1)(\sqrt{1+a}+1)})\]",r"\[B=ln(\frac{a}{(\sqrt{1+a}+1)^2})\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"\[I(a)-C=\frac{\pi}{2}(ln(a)-ln(\frac{a}{(\sqrt{1+a}+1)^2}))\]",r"\[I(a)-C=\frac{\pi}{2}(ln(a)+ln(\frac{(\sqrt{1+a}+1)^2}{a}))\]",r"\[I(a)-C=\frac{\pi}{2}ln((\sqrt{1+a}+1)^2)\]",r"\[I(a)=\pi ln(\sqrt{1+a}+1)+C\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Plugging in our condition from the start",r"\[I(0)=0=\pi ln(2)+C\]",r"\[\implies C=-\pi ln(2)\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"\[I(a)=\pi ln(\sqrt{1+a}+1)-\pi ln(2)\]",r"\[I(a)=\pi ln(\frac{1+\sqrt{1+a}}{2})\]",r"\[I(4)=\int_{0}^{\frac{\pi}{2}}ln(1+4sin^2(x))dx\]",r"\[=\pi ln(\frac{1+\sqrt{5}}{2})\]",r"\[=\pi ln(\varphi)\]",font_size=50)
        self.play(Write(text))
        self.wait(5)
        prev.append(text)
        self.remove(text)

        text = Tex(r"\[\int_{0}^{\frac{\pi}{2}}ln(1+4sin^2(x))dx=\pi ln(\varphi)\]",font_size=70)
        self.play(Write(text))
        self.wait(7)
        prev.append(text)
        self.remove(text)

        text = Tex(r"Thanks for watching.",font_size=70)
        self.play(Write(text))
        self.wait(10)
        prev.append(text)
        self.remove(text)