
$(1+x)^n \ge 1+nx \;\; \forall n \in \Bbb{N}$

passo base:
n=0, $1\ge 1+0$ vera
passo induttivo:
ipotesi: $(1+x)^n \ge 1+nx$
tesi: $(1+x)^{n+1} \ge 1+(n+1)x$

dimostrazione:
$(1+x)^{n+1}=(1+x)(1+x)^n\ge (1+x)(1+nx)=1+nx+x+nx^2$
$=1+(n+1)x+nx^2 \ge 1+(n+1)x$

E' implicito che ho usato una delle proprieta' dell'ordinamento ossia moltiplico per 1+x e lascio invariata la disuguaglianza se $1+x\ge0 \iff x\ge -1$

Quindi:
$(1+x)^n \ge 1+nx \;\; \forall n \in \Bbb{N} \;\; x>-1$
